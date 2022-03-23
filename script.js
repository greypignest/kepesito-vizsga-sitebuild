const datas = [
    {
        title: "US Dollar",
        sub: "$",
        text: "USD"
    },
    {
        title: "Euro",
        sub: "€",
        text: "EUR"
    },
    {
        title: "Chinese Yuan",
        sub: "¥",
        text: "CNY"
    },
    {
        title: "Thai Baht",
        sub: "฿",
        text: "THB"
    },
    {
        title: "British Pound Sterling",
        sub: "£",
        text: "GBP"
    },
    {
        title: "Ghanaian Cedi",
        sub: "₵",
        text: "GHS"
    },
    {
        title: "Japanese Yen",
        sub: "￥",
        text: "JPY"
    },
    {
        title: "Polish Zloty",
        sub: "zł",
        text: "PLN"
    },    
];

const card = (data) => {
    return `
        <div class="card">
            <p class="sub">${data.sub}</p>
            <p class="title">${data.title}</p>
            <p class="text">${data.text}</p>
            <button>
                Save
                <span class="material-icons">arrow_forward</span>
            </button>
        </div>
    `    
}

function loadEvent() {
    const container = document.querySelector(".container")
    for (const data of datas) {
        container.insertAdjacentHTML("beforeend", card(data))
    }
}

window.addEventListener("load", loadEvent)