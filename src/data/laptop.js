
import hp from "../assets/hp.jpg";
import dell from "../assets/dell.jpg";
import images from "../assets/image1.png";
import images2 from "../assets/image2.jpg";
import dell1 from "../assets/dell1.jpg";
import dell2 from "../assets/dell3.jpg";
import dell3 from "../assets/dell2.jpg";


import lenovo1 from "../assets/lenovo1.jpg";

import lenovo4 from "../assets/lenovo4.jpg";
import lenovo5 from "../assets/lenovo5.jpg";
import lenovo6 from "../assets/lenovo6.jpg";
import lenovo7 from "../assets/lenovo7.jpg";
import lenovo8 from "../assets/lenovo8.jpg";
import lenovo9 from "../assets/lenovoremove1.png";
import lenovo10 from "../assets/lenovoremove2.png";
import lenovo11 from "../assets/lenovoremove3.png";






// --- All Laptops Data ---
export const laptops = [
  {
    id: 1,
    brand: "HP",
    name: "HP EliteBook 830 G8 Touch",
    processor: "Intel Core i5 11th Gen",
    ram: "16GB DDR4",
    storage: "256GB NVMe SSD",
    display: '13.3" Touch Full HD Anti-Glare',
    gpu: "Intel Iris Xe Graphics",
    price: "₹31,500",
    images: [images],
    description:
      "Slim & lightweight HP EliteBook with touch display, backlit keyboard, and fast performance.",
    battery: "2 Hrs Backup",
    ports: "Wi-Fi, WebCam, Bluetooth",
    os: "Windows 11 Professional 64-bit",
    warranty: "3 Months Hardware Warranty",
    free: "laptop bag ",
  },
    {
        id: 2,
        brand: "HP",
        name: "HP EliteBook 840 G3",
        processor: "Intel Core i5 6th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel HD Graphics",
        price: "₹14,700",
        images: [
            images, images2
            // "https://source.unsplash.com/featured/?laptop,hp",
            // "https://source.unsplash.com/featured/?hp,elitebook"
        ],
        description: "HP EliteBook 840 G3 with compact build and reliable performance.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty",
        
    },
    {
        id: 3,
        brand: "Dell",
        name: "Dell Latitude 5411",
        processor: "Intel Core i5-10400H 2.60GHz",
        ram: "16GB DDR4 (Supports up to 32GB)",
        storage: "512GB NVMe SSD (Supports up to 4TB)",
        display: "14.1\" FHD Touch Screen",
        gpu: "2GB NVIDIA Graphics",
        price: "₹25,700",
        images: [
            dell,hp,
            "https://source.unsplash.com/featured/?laptop,dell",
            "https://source.unsplash.com/featured/?dell,latitude"
        ],
        description: "Performance beast with 10th Gen H-series CPU and NVIDIA graphics.",
        battery: "3 Months Hardware Warranty",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 4,
        brand: "Dell",
        name: "Dell Latitude 7400",
        processor: "Intel Core i5 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14.1\" FHD LED",
        gpu: "Intel UHD Graphics",
        price: "₹17,900",
        images: [
            dell1,dell2,dell3,
            "https://source.unsplash.com/featured/?dell,laptop",
            "https://source.unsplash.com/featured/?latitude,7400"
        ],
        description: "Dell Latitude 7400 with slim design, ideal for professionals.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 5,
        brand: "HP",
        name: "HP EliteBook 840 G8",
        processor: "Intel Core i5 11th Gen",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" Full HD Anti-Glare",
        gpu: "Intel HD Graphics",
        price: "₹29,800",
        images: [
            "https://source.unsplash.com/featured/?hp,840g8",
            "https://source.unsplash.com/featured/?laptop,hp"
        ],
        description: "High-performance HP EliteBook with slim & lightweight design.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },

    {
        id: 6,
        brand: "HP",
        name: "HP EliteBook 840 G7",
        processor: "Intel Core i7 10th Gen",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" Full HD Anti-Glare",
        gpu: "Intel UHD Graphics",
        price: "₹29,300",
        images: [
            "https://source.unsplash.com/featured/?hp,elitebook",
            "https://source.unsplash.com/featured/?hp,laptop"
        ],
        description: "Premium business laptop with fingerprint reader, B&O Audio, and sleek build.",
        battery: "Long Battery Life",
        ports: "USB-C, HDMI, Wi-Fi, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 7,
        brand: "Dell",
        name: "Dell Latitude 5400",
        processor: "Intel Core i7 8th Gen",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel UHD Graphics",
        price: "₹23,700",
        images: [
            "https://source.unsplash.com/featured/?dell,latitude",
            "https://source.unsplash.com/featured/?laptop,dell"
        ],
        description: "Dell Latitude 5400 with strong performance and business durability.",
        battery: "2+ Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 8,
        brand: "Dell",
        name: "Dell Latitude 5400",
        processor: "Intel Core i7 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel UHD Graphics",
        price: "₹20,300",
        images: [dell3,
            "https://source.unsplash.com/featured/?dell,5400",
            "https://source.unsplash.com/featured/?laptop,office"
        ],
        description: "Affordable Dell Latitude 5400 for multitasking.",
        battery: "3 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 9,
        brand: "Dell",
        name: "Dell Latitude E7450",
        processor: "Intel Core i5 5th Gen",
        ram: "8GB DDR3",
        storage: "256GB M-SATA SSD",
        display: "14\" HD Anti-Glare LED",
        gpu: "Intel UHD Graphics",
        price: "₹13,500",
        images: [dell3,
            "https://source.unsplash.com/featured/?dell,e7450",
            "https://source.unsplash.com/featured/?dell,oldlaptop"
        ],
        description: "Reliable Dell Latitude E7450 with 5th Gen i5 and SSD storage.",
        battery: "2+ Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 10 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 10,
        brand: "Dell",
        name: "Dell Latitude E7450",
        processor: "Intel Core i5 5th Gen",
        ram: "8GB DDR3",
        storage: "512GB M-SATA SSD",
        display: "14\" HD Anti-Glare LED",
        gpu: "Intel UHD Graphics",
        price: "₹14,800",
        images: [dell3,
            "https://source.unsplash.com/featured/?dell,512ssd",
            "https://source.unsplash.com/featured/?dell,notebook"
        ],
        description: "Dell Latitude E7450 upgraded with 512GB SSD for more storage.",
        battery: "2+ Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 10 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 11,
        brand: "Dell",
        name: "Dell Latitude 5490",
        processor: "Intel Core i5 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel HD Graphics",
        price: "₹17,300",
        images: [dell3,
            "https://source.unsplash.com/featured/?dell,5490",
            "https://source.unsplash.com/featured/?laptop,dell"
        ],
        description: "Compact and efficient Dell Latitude 5490.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 12,
        brand: "Dell",
        name: "Dell Latitude 7480",
        processor: "Intel Core i5 7th Gen",
        ram: "8GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel HD Graphics",
        price: "₹18,500",
        images: [dell3,
            "https://source.unsplash.com/featured/?dell,7480",
            "https://source.unsplash.com/featured/?laptop,thin"
        ],
        description: "Dell Latitude 7480 with 7th Gen Intel Core i5 and large SSD.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 13,
        brand: "Dell",
        name: "Dell Latitude 7480",
        processor: "Intel Core i5 7th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel HD Graphics",
        price: "₹16,500",
        images: [dell3,
            "https://source.unsplash.com/featured/?dell,office",
            "https://source.unsplash.com/featured/?dell,lightweight"
        ],
        description: "Affordable Dell Latitude 7480 for students and office work.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty",
        discount : 10
    },
    {
        id: 14,
        brand: "Dell",
        name: "Dell Latitude E5450",
        processor: "Intel Core i7 5th Gen",
        ram: "8GB DDR3",
        storage: "256GB SATA SSD",
        display: "14\" HD Anti-Glare LED",
        gpu: "Intel HD Graphics",
        price: "₹14,500",
        images: [
            "https://source.unsplash.com/featured/?dell,e5450",
            "https://source.unsplash.com/featured/?old,dell"
        ],
        description: "Dell Latitude E5450 with i7 5th Gen processor.",
        battery: "2+ Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 10 Professional 64-bit",
        warranty: "3 Months Hardware Warranty",
         discount: 20,
    },
    {
        id: 15,
        brand: "Dell",
        name: "Dell Latitude E5450",
        processor: "Intel Core i5 5th Gen",
        ram: "8GB DDR3",
        storage: "256GB SATA SSD",
        display: "14\" HD Anti-Glare LED",
        gpu: "Intel UHD Graphics",
        price: "₹12,900",
        images: [
            "https://source.unsplash.com/featured/?dell,e5450",
            "https://source.unsplash.com/featured/?dell,usedlaptop"
        ],
        description: "Entry-level Dell Latitude with 5th Gen i5 and SSD storage.",
        battery: "2+ Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 10 Professional 64-bit",
        warranty: "3 Months Hardware Warranty",
         discount: 15,
    },

    {
        id: 16,
        brand: "HP",
        name: "HP EliteBook 840 G5",
        processor: "Intel Core i5 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14.1\" FHD",
        gpu: "Intel UHD Graphics",
        price: "₹20,900",
        images: [dell2,
            "https://source.unsplash.com/featured/?hp,840g5",
            "https://source.unsplash.com/featured/?hp,elitebook"
        ],
        description: "HP EliteBook 840 G5 with slim design, Windows 11 Pro, and professional performance.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty",
        discount: 5,
    },
    {
        id: 17,
        brand: "Dell",
        name: "Dell Latitude 7490",
        processor: "Intel Core i7 8th Gen",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        display: "14\" Full HD",
        gpu: "Intel UHD Graphics",
        price: "₹24,700",
        images: [
            "https://source.unsplash.com/featured/?dell,7490",
            "https://source.unsplash.com/featured/?dell,laptop"
        ],
        description: "Premium Dell Latitude 7490 with i7, 16GB RAM, and backlit keyboard.",
        battery: "Excellent Backup",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 18,
        brand: "Dell",
        name: "Dell Latitude 7490",
        processor: "Intel Core i7 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        display: "14\" Full HD",
        gpu: "Intel UHD Graphics",
        price: "₹21,300",
        images: [
            "https://source.unsplash.com/featured/?dell,7490",
            "https://source.unsplash.com/featured/?dell,notebook"
        ],
        description: "Dell Latitude 7490 i7 with 8GB RAM and slim professional design.",
        battery: "Excellent Backup",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 19,
        brand: "Dell",
        name: "Dell Latitude 7490",
        processor: "Intel Core i5 8th Gen",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        display: "14\" Full HD",
        gpu: "Intel UHD Graphics",
        price: "₹21,900",
        images: [
            "https://source.unsplash.com/featured/?dell,latitude",
            "https://source.unsplash.com/featured/?dell,7490"
        ],
        description: "Dell Latitude 7490 i5 variant with 16GB RAM and 512GB SSD.",
        battery: "Excellent Backup",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 20,
        brand: "Dell",
        name: "Dell Latitude 7490",
        processor: "Intel Core i5 8th Gen",
        ram: "8GB DDR4",
        storage: "256GB SSD",
        display: "14\" Full HD",
        gpu: "Intel UHD Graphics",
        price: "₹18,500",
        images: [
            "https://source.unsplash.com/featured/?dell,office",
            "https://source.unsplash.com/featured/?dell,7490"
        ],
        description: "Affordable Dell Latitude 7490 with 8GB RAM, Windows 10 Pro.",
        battery: "Good Backup",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 10 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 21,
        brand: "Dell",
        name: "Dell Latitude 5470",
        processor: "Intel Core i5 6th Gen",
        ram: "8GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel UHD Graphics",
        price: "₹16,700",
        images: [
            "https://source.unsplash.com/featured/?dell,5470",
            "https://source.unsplash.com/featured/?dell,laptop"
        ],
        description: "Dell Latitude 5470 upgraded with 512GB NVMe SSD.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 22,
        brand: "Dell",
        name: "Dell Latitude 5470",
        processor: "Intel Core i5 6th Gen",
        ram: "8GB DDR4",
        storage: "256GB NVMe SSD",
        display: "14\" FHD LED",
        gpu: "Intel UHD Graphics",
        price: "₹14,300",
        images: [
            "https://source.unsplash.com/featured/?dell,5470",
            "https://source.unsplash.com/featured/?dell,usedlaptop"
        ],
        description: "Dell Latitude 5470 with i5, 8GB RAM, and reliable build.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 23,
        brand: "Lenovo",
        name: "Lenovo ThinkPad T480",
        processor: "Intel Core i7 8th Gen",
        ram: "8GB DDR4 (Up to 32GB)",
        storage: "256GB NVMe SSD",
        display: "14\" FHD Touch LED",
        gpu: "Intel UHD Graphics",
        price: "₹18,500",
        images: [
            lenovo1,lenovo4,lenovo5,lenovo6,lenovo7,lenovo8,lenovo9,lenovo10,lenovo11
        ],
        description: "Durable Lenovo ThinkPad T480 with 8th Gen i7 and touch screen.",
        battery: "2+ Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 24,
        brand: "Lenovo",
        name: "Lenovo ThinkPad T14 Gen 2",
        processor: "Intel Core i5 11th Gen",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" FHD IPS Anti-Glare",
        gpu: "Intel UHD Graphics",
        price: "₹25,900",
        images: [
            "https://source.unsplash.com/featured/?lenovo,t14",
            "https://source.unsplash.com/featured/?thinkpad,laptop"
        ],
        description: "ThinkPad T14 Gen 2 with advanced connectivity, FIDO, TPM 2.0, and Thunderbolt support.",
        battery: "3+ Hrs Backup",
        ports: "USB-C, Thunderbolt 3, HDMI, RJ45, MicroSD, USB 3.2",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 25,
        brand: "Lenovo",
        name: "Lenovo ThinkPad P51",
        processor: "Intel Core i7 7th Gen 7820HQ (4C/8T)",
        ram: "32GB DDR4 (128GB Supported)",
        storage: "512GB NVMe SSD",
        display: "15.6\" FHD",
        gpu: "NVIDIA Quadro M1200 4GB",
        price: "₹26,500",
        images: [
            "https://source.unsplash.com/featured/?lenovo,p51",
            "https://source.unsplash.com/featured/?thinkpad,workstation"
        ],
        description: "Workstation-grade ThinkPad P51 with Quadro graphics and massive RAM support.",
        battery: "2 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth, HDMI, USB",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 26,
        brand: "Lenovo",
        name: "Lenovo ThinkPad E14 Gen 2",
        processor: "Intel Core i5 11th Gen 1135G7",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" LED",
        gpu: "Intel UHD Graphics",
        price: "₹24,300",
        images: [
            "https://source.unsplash.com/featured/?lenovo,e14",
            "https://source.unsplash.com/featured/?lenovo,thinkpad"
        ],
        description: "ThinkPad E14 Gen 2 with Wi-Fi 6, dTPM 2.0 security, and slim design.",
        battery: "3+ Hrs Backup",
        ports: "USB-C, Thunderbolt 3, HDMI, RJ45, MicroSD, USB 3.2",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },
    {
        id: 27,
        brand: "Dell",
        name: "Dell Latitude 5400",
        processor: "Intel Core i5 8th Gen",
        ram: "16GB DDR4",
        storage: "512GB NVMe SSD",
        display: "14\" FHD LED Touch",
        gpu: "Intel UHD Graphics",
        price: "₹20,800",
        images: [
            "https://source.unsplash.com/featured/?dell,5400",
            "https://source.unsplash.com/featured/?dell,touch"
        ],
        description: "Dell Latitude 5400 with touch display and 16GB RAM.",
        battery: "3 Hrs Backup",
        ports: "Wi-Fi, WebCam, Bluetooth",
        os: "Windows 11 Professional 64-bit",
        warranty: "3 Months Hardware Warranty"
    },

];
export default laptops;

    