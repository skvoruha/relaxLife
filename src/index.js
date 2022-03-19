import header from "./modules/header";
import menu from "./modules/menu";
import phoneMask from "./modules/phoneMask";
import sendForm from "./modules/sendForm";

header()
menu()
phoneMask('input[name=phone]')

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