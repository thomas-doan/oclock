document.addEventListener("DOMContentLoaded", (event) => {
    let input = document.querySelector("#time");

    function getValueTimer(data) {
        data_integer = parseInt(data.value, 10);
        return data_integer;
    }

    input.addEventListener("focusout", () => {
        console.log(getValueTimer(input));
    });
});