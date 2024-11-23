export interface TechnicalSpec {
  name: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  subCategory?: string;
  description: string;
  technicalSpecs: TechnicalSpec[];
  price: number;
  stock: number;
  manufacturer: string;
  images: string[];
  datasheets?: string[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Arduino Uno R3",
    sku: "ARD-UNO-R3",
    category: "Microcontrollers",
    subCategory: "Arduino",
    description: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button.",
    technicalSpecs: [
      { name: "Microcontroller", value: "ATmega328P" },
      { name: "Operating Voltage", value: "5V" },
      { name: "Input Voltage", value: "7-12V" },
      { name: "Digital I/O Pins", value: "14" },
      { name: "Analog Input Pins", value: "6" },
      { name: "DC Current per I/O Pin", value: "20 mA" }
    ],
    price: 23.99,
    stock: 50,
    manufacturer: "Arduino",
    images: [
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=800",
      "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=600"
    ],
    datasheets: ["arduino-uno-r3-datasheet.pdf"],
    weight: 25,
    dimensions: {
      length: 68.6,
      width: 53.4,
      height: 13
    },
    tags: ["arduino", "microcontroller", "development board", "beginner friendly"]
  },
  {
    id: "2",
    name: "Raspberry Pi 4 Model B",
    sku: "RPI-4B-4GB",
    category: "Single Board Computers",
    description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity.",
    technicalSpecs: [
      { name: "Processor", value: "Broadcom BCM2711" },
      { name: "RAM", value: "4GB LPDDR4" },
      { name: "Connectivity", value: "2.4 GHz and 5.0 GHz WiFi" },
      { name: "Bluetooth", value: "5.0" },
      { name: "USB Ports", value: "2 × USB 3.0 + 2 × USB 2.0" }
    ],
    price: 45.99,
    stock: 25,
    manufacturer: "Raspberry Pi Foundation",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800"
    ],
    tags: ["raspberry pi", "single board computer", "linux"]
  }
];