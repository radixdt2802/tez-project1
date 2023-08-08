export  function getTitleCode(TitleReferenceCode:any) {

  if(TitleReferenceCode && TitleReferenceCode.includes("__")){
    return [TitleReferenceCode.split("__")[0] ,TitleReferenceCode.split("__")[1]]  
  }
  else{
      return [TitleReferenceCode , 'D']
  }
}