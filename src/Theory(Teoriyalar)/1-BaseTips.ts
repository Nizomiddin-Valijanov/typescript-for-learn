// Asosiy turlar
const firstName: string = "Nizom";
const age: number = 21;
const isOwner: boolean = true;

const profile: undefined = undefined;
const city: null = null;

// any tipi o'ziga hamma tipni egallay oladi biror bir tipga egallab va o'sha tipga
// tegishlimas tipni metodini ishlatsa Compile-timeda hech qanday xato chiqmaydi ammo runtimeda xatolik chiqadi
// let anyValue: any;
// anyValue = 123; // Number
// anyValue = "Hello"; // String
// anyValue = true; // Boolean
// Any qiymatga har qanday operatsiyani bajarish mumkin:
// anyValue.toUpperCase(); // Compile-time error yo'q, lekin run-time xato bo'lishi mumkin
const dogName: any = true;

// unknown tipi ham TypeScript'ga noma'lum turdagi qiymatni qabul qilishga imkon beradi, lekin u yanada aniqroq bo'lib,
//xavfsizroq bo'lishni ta'minlaydi.
// let unknownValue: unknown;
// unknownValue = 123; // Number
// unknownValue = "Hello"; // String
// unknownValue = true; // Boolean

// `unknown` turidagi qiymat bilan ishlashdan oldin, uning turini tekshirish kerak:
// if (typeof unknownValue === "string") {
//   unknownValue.toUpperCase(); // Compile-time va run-time xatosiz
// }

const something: unknown = null;

// objectlar strukturasi
const userProfile: {
  name: string;
  age: number;
  email: string;
  man: boolean;
} = {
  name: "Nizomiddin",
  age: 20,
  email: "example@gmail.com",
  man: true,
};

