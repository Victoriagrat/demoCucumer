class GoogleSearch {
  
    open (){
        return browser.url('https://google.com');  
    }
    
    get inputSearch(){
        return $('[name="q"]');
    }
    get  buttonSearch(){
     return $('[name="btnK"]');
    }
    async search (phrase) {
        await (await this.inputSearch).setValue(phrase);
        await (await this.buttonSearch).click();
    }
}
export default new GoogleSearch();