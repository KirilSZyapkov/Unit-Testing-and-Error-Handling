function validate() {
    let inputText = document.getElementById('email');
    const patern = /(^[a-z]+)@([a-z]+).[a-z]+$/g;

    inputText.addEventListener('change', () => {
        let txt = inputText.value;
        if(txt.match(patern)){
            inputText.className = '';
        } else {
            inputText.className = 'error';
        }
    })

}