import header from "./modules/header";
import menu from "./modules/menu";
import phoneMask from "./modules/phoneMask";
import sendForm from "./modules/sendForm";
import privacyPolicy from "./modules/privacyPolicy";
import formula from "./modules/formula";
// import slider from "./modules/slider";
import { swiper } from "./modules/swiper";

header()
menu()
phoneMask('input[name=phone]')
privacyPolicy()
formula()
// slider()
swiper()


sendForm({
  formId:'feedback1'})
sendForm({
  formId:'feedback2'})
sendForm({
  formId:'feedback3'})
sendForm({
  formId:'feedback4'})
sendForm({
  formId:'feedback5'})
sendForm({
  formId:'feedback6'})