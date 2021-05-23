class YahooSearch {
  
    open (){
        return browser.url('https://www.yahoo.com/');  
    }
    
    get inputSearch(){
        return $('#ybar-sbq');
    }
    get  buttonSearch(){
     return $('[value="Search"]');
    }
    async search (phrase) {
        await (await this.inputSearch).setValue(phrase);
        await (await this.buttonSearch).click();
    }
}
export default new YahooSearch();