 ## Задания на курс
 - сделать структурную директиву "ACL": в нее передается какие роли могут иметь доступ к компоненту. Она через сервис смотрит роль текущего пользователя и прячет либо показывает элемент на странице.
 (https://github.com/eugene-trusevich/angularpro/blob/master/src/app/common/directives/acl.directive.ts )

 - сделать прототип Dashboard странички, где может присуствовать до 20 разных компонентов/виджетов (сами компоненты сделать пустышками с текстом либо картинкой), а их набор и порядок/расположение задается сервром (сэмулировать асинхронный запрос)
 (https://github.com/eugene-trusevich/angularpro/blob/master/src/app/dashboard/dashboard.component.ts)

 - сделать pipe, который будет показывать timeAgo
 (https://github.com/eugene-trusevich/angularpro/blob/master/src/app/common/pipes/time-ago.pipe.ts)

 - завернуть форму регистрации пользователя (стандартные поля) в angular-element. Сделать параметром: показывать минимальную форму или расширенную. Считывать событие успешного заполнения/отправки формы и ошибок формы.
Было лень создавать отдельный проект. (npm run build:elements)
