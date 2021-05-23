class YndexSearch {
  
    open (){
        return browser.url('https://www.yandex.com/');  
    }
    
    get inputSearch(){
        return $('#text');
    }
    get  buttonSearch(){
     return $('[role="img"]');
    }
    async search (phrase) {
        await (await this.inputSearch).setValue(phrase);
        await (await this.buttonSearch).click();
    }
}
export default new YndexSearch();