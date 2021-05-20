class Googlesearh{
    
    open () {
        return browser.url('https;//google.com');
    }
    get inputSearch(){
        return $('[title="Поиск"]');
}
get btnSearch(){
    return $('[value="Поиск в Google"]');
}
async search (phrase){
    await(await this.inputSearch.setValue(phrase));
    await(await this.btnSearch).click();
}
}

export default new Googlesearh();
