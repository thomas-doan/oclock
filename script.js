document.addEventListener("DOMContentLoaded", (event) => {
    let input = document.querySelector("#time");
    let addMin = document.querySelector("#plus");
    let delMin = document.querySelector("#minus");

    function getValueTimer(data) {
        format_data = data.value.replace(",", ".");
        data_integer = parseFloat(format_data);

        return data_integer;
    }

    function timeDecrease(data_time) {
        data_time--;
        input.value = data_time;
        return data_time;
    }

    function loopTimeDecrease(data) {
        let timerId = setInterval(() => {
            if (input.value > 0) {
                timeDecrease(getValueTimer(data));
            } else {
                alert("FINI");
                clearInterval(timerId);
            }
        }, 1000);
    }

    function increaseMinute() {
        input.value++;
    }

    function decreaseMinute() {
        input.value--;
    }

    input.addEventListener("focusout", () => {
        loopTimeDecrease(input);
    });

    addMin.addEventListener("click", () => {
        increaseMinute();
    });

    delMin.addEventListener("click", () => {
        decreaseMinute();
    });
});