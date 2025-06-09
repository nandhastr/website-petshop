import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const PriceList = [
    {
        id: 1,
        name: "Grooming",
        choiceTitle: "Pilihan Grooming",
        price: "Rp. 50.000",
        benefit: [
            {
                title: "Grooming",
                icon: faCheck,
                color: "text-green-500"
            },
            {
                title: "Vaccination",
                icon: faXmark,
                color: "text-red-500"
            }
        ]
    },
    {
        id: 2,
        name: "Vaccination",
        choiceTitle: "Pilihan Vaccination",
        price: "Rp. 50.000",
        benefit: [
            {
                title: "Grooming",
                icon: faXmark,
                color: "text-red-500"
            },
            {
                title: "Vaccination",
                icon: faCheck,
                color: "text-green-500"
            }
        ]
    },
    {
        id: 3,
        name: "Full Service",
        choiceTitle: "Pilihan Full Service",
        price: "Rp. 100.000",
        benefit: [
            {
                title: "Grooming",
                icon: faCheck,
                color: "text-green-500"
            },
            {
                title: "Vaccination",
                icon: faCheck,
                color: "text-green-500"
            }
        ]
    }
];

export default PriceList;