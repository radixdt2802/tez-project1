<template>
  <div class="vci-container" ref="containerRef">
    <img
      :width="leftImageWidth"
      :height="leftImageHeight"
      loading="lazy"
      :alt="leftImageAlt"
      v-rxlazy="leftImage"
      :style="leftImageStyle"
      class="left-image"
      ref="leftImageRef"
    />
    <div :style="leftImageStyle" class="left-label">{{leftLabel}}</div>

    <img
      :width="rightImageWidth"
      :height="rightImageHeight"
      loading="lazy"
      :alt="rightImageAlt"
      v-rxlazy="rightImage"
      class="right-image"
      ref="rightImageRef"
    />
    <div :style="rightLabelStyle" ref="rightLabelRef" class="right-label">{{rightLabel}}</div>

    <div :style="sliderStyle" class="vci-slider">
      <div :style="sliderLineStyle" class="line" />
      <div :style="sliderHandleStyle" class="handle">
        <div :style="sliderLeftArrowStyle" class="left-arrow" />
        <div :style="sliderRightArrowStyle" class="right-arrow" />
      </div>
      <div :style="sliderLineStyle" class="line" />
    </div>
  </div>
</template>

<script type="text/javascript">
import Vue from "vue";
import { ResizeSensor } from "css-element-queries";
export default Vue.extend({
  mounted() {
    // get and set `imageWidth` when the container size changed
    // (including first time rendering)
    //
    // eslint-disable-next-line
    new ResizeSensor(this.$refs.containerRef, () => {
      this.getAndSetImageWidth();
    });
    const containerElement = this.$refs.containerRef;
    // for mobile
    containerElement.addEventListener("touchstart", this.startSliding, {
      passive: true,
    });
    window.addEventListener("touchend", this.finishSliding, { passive: true });
    // for desktop
    if (this.hover) {
      containerElement.addEventListener("mouseenter", this.startSliding, {
        passive: true,
      });
      containerElement.addEventListener("mouseleave", this.finishSliding, {
        passive: true,
      });
    } else {
      containerElement.addEventListener("mousedown", this.startSliding, {
        passive: true,
      });
      window.addEventListener("mouseup", this.finishSliding, { passive: true });
    }
  },
  beforeDestroy() {
    this.finishSliding();
    window.removeEventListener("mouseup", this.finishSliding);
    window.removeEventListener("touchend", this.finishSliding);
  },
  props: {
    leftImageWidth: {
      type: Number,
      default: 500,
    },
    leftImageHeight: {
      type: Number,
      default: 500,
    },
    rightImageWidth: {
      type: Number,
      default: 500,
    },
    rightImageHeight: {
      type: Number,
      default: 500,
    },
    leftImage: {
      type: Object,
      default: null,
    },
    leftImageAlt: {
      type: String,
      default: null,
    },
    leftLabel: {
      type: String,
      default: "",
    },
    // under image
    rightImage: {
      type: Object,
      default: null,
    },
    rightImageAlt: {
      type: String,
      default: null,
    },
    rightLabel: {
      type: String,
      default: "",
    },
    /*   hover: {
      type: Boolean,
      default: false,
    }, */
    handleSize: {
      type: Number,
      default: 40,
    },
    sliderLineWidth: {
      type: Number,
      default: 2,
    },
    sliderPositionPercentage: {
      type: Number,
      default: 0.5,
    },
  },
  methods: {
    getAndSetImageWidth() {
      // @ts-ignore
      this.imageWidth = this.$refs.rightImageRef.getBoundingClientRect().width;
      this.rightLabelWidth =
        this.$refs.rightLabelRef.getBoundingClientRect().width;
    },
    startSliding(e) {
      // Prevent default behavior other than mobile scrolling
      if (!("touches" in e)) {
        e.preventDefault();
      }
      // Slide the image even if you just click or tap (not drag)
      this.updateSliderPosition(e);
      window.addEventListener("mousemove", this.updateSliderPosition, {
        passive: true,
      });
      window.addEventListener("touchmove", this.updateSliderPosition, {
        passive: true,
      });
    },
    finishSliding() {
      window.removeEventListener("mousemove", this.updateSliderPosition);
      window.removeEventListener("touchmove", this.updateSliderPosition);
    },
    updateSliderPosition(event) {
      const e = event || window.event;
      // Calc Cursor Position from the left edge of the viewport
      const cursorXfromViewport = e.touches ? e.touches[0].pageX : e.pageX;
      // Calc Cursor Position from the left edge of the window (consider any page scrolling)
      const cursorXfromWindow = cursorXfromViewport - window.pageXOffset;
      // Calc Cursor Position from the left edge of the image
      const imagePosition = this.$refs.rightImageRef.getBoundingClientRect();
      let pos = cursorXfromWindow - imagePosition.left;
      // Set minimum and maximum values ​​to prevent the slider from overflowing
      const minPos = 0 + this.sliderLineWidth / 2;
      const maxPos = this.imageWidth - this.sliderLineWidth / 2;
      if (pos < minPos) pos = minPos;
      if (pos > maxPos) pos = maxPos;
      this.positionPct = pos / this.imageWidth;
    },
  },
  data() {
    return {
      // slider position percentage(0 to 1)
      positionPct: this.sliderPositionPercentage || 0.5,
      imageWidth: 0,
    };
  },
  computed: {
    // eslint-disable
    leftImageStyle() {
      return {
        clip: `rect(auto, ${this.imageWidth * this.positionPct}px, auto, auto)`,
      };
    },
    rightLabelStyle() {
      const cutLeft = Math.max(
        0,
        this.rightLabelWidth + this.imageWidth * (this.positionPct - 1)
      );
      return {
        clip: `rect(auto, auto, auto, ${cutLeft}px)`,
      };
    },
    sliderStyle() {
      return {
        cursor: !this.hover && "ew-resize",
        left: this.imageWidth * this.positionPct - this.handleSize / 2 + "px",
        width: `${this.handleSize}px`,
      };
    },
    sliderLineStyle() {
      return { width: `${this.sliderLineWidth}px` };
    },
    sliderHandleStyle() {
      return {
        border: `${this.sliderLineWidth}px solid white`,
        height: `${this.handleSize}px`,
        width: `${this.handleSize}px`,
      };
    },
    sliderLeftArrowStyle() {
      return {
        border: `inset ${this.handleSize * 0.3}px rgba(0,0,0,0)`,
        borderRight: `${this.handleSize * 0.3}px solid white`,
        marginLeft: `-${this.handleSize * 0.25}px`, // for IE11
        marginRight: `${this.handleSize * 0.25}px`,
      };
    },
    sliderRightArrowStyle() {
      return {
        border: `inset ${this.handleSize * 0.15}px rgba(0,0,0,0)`,
        borderLeft: `${this.handleSize * 0.15}px solid white`,
        marginRight: `-${this.handleSize * 0.25}px`, // for IE11
      };
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.vci-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.left-image {
  display: block;
  height: 100%;
  // fit to the height of under image
  object-fit: cover;
  // protrudes is hidden
  position: absolute;
  top: 0;
  width: 100%;
}

.left-label {
  opacity: 0;
  position: absolute;
  top: 0rem;
  left: 0rem;
  padding: 0.375rem 0.625rem;
}

.right-image {
  display: block;
  height: auto;
  // Respect the aspect ratio
  width: 100%;
}

.right-image {
  display: block;
  height: auto;
  // Respect the aspect ratio width: 100%;
}

.right-label {
  opacity: 0;
  position: absolute;
  top: 0rem;
  right: 0rem;
  padding: 0.375rem 0.625rem;
}

.vci-slider {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  .line {
    background: white;
    box-shadow: 0rem 0.1875rem 0.0625rem -0.125rem rgba(0, 0, 0, 0.2),
      0rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.3125rem 0rem rgba(0, 0, 0, 0.12);
    flex: 0 1 auto;
    height: 100%;
  }

  .handle {
    align-items: center;
    border-radius: 100%;
    box-shadow: 0rem 0.1875rem 0.0625rem -2px rgba(0, 0, 0, 0.2),
      0rem 0.125rem 0.125rem 0rem rgba(0, 0, 0, 0.14), 0rem 0.0625rem 0.3125rem 0rem rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
  }

  .left-arrow {
    height: "0rem";
    width: "0rem";
  }

  .right-arrow {
    display: none;
    height: "0rem";
    width: "0rem";
  }
  .vci-container {
    input,
    textarea,
    button,
    select,
    li,
    div,
    a {
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>
