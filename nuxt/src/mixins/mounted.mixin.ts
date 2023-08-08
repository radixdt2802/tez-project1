import { GlobalFunc } from '../utils/global-func'
var state:any = {};
export default {
  updated: function () {
    let _this:any = this;
    if(_this.tzDataChanged && !_this.$tzId){
      let randomNumber:any =  Math.random() * 10000000;
      _this.$tzId =parseInt(randomNumber);
    }else if(_this.$tzId){
      if(_this.data && _this.data.$tzId !== _this.$tzId){
        _this.data.$tzId = _this.$tzId;
        _this.tzDataChanged();
        delete _this.$tzId;
      }
    }

    _this.$nextTick(function () {
      if(!_this.ticked){
        
        if(_this.$parent && _this.$parent.$parent && _this.$parent.$parent.tezTicked){
          _this.ticked = true
          _this.$emit("ticked")  
        }
      }
    })
  }
}
