<?php
// web.php 將所有的方法寫入以利於前端使用

//Member
$router->register('getMember', 'Member', 'getMember');
$router->register('getMembers', 'Member', 'getMembers');
$router->register('newMember', 'Member', 'newMember');
$router->register('updateMember', 'Member', 'updateMember');
$router->register('removeMember', 'Member', 'removeMember');

// Employee
$router->register('getEmployees', 'Employee', 'getEmployees');
$router->register('getEmployee', 'Employee', 'getEmployee');
$router->register('newEmployee', 'Employee', 'newEmployee');
$router->register('removeEmployee', 'Employee', 'removeEmployee');
$router->register('updateEmployee', 'Employee', 'updateEmployee');

// Company
$router->register('getCompanys', 'Company', 'getCompanys');
$router->register('getCompany', 'Company', 'getCompany');
$router->register('newCompany', 'Company', 'newCompany');
$router->register('removeCompany', 'Company', 'removeCompany');
$router->register('updateCompany', 'Company', 'updateCompany');

// Method
$router->register('getMethods', 'Method', 'getMethods');
$router->register('getMethod', 'Method', 'getMethod');
$router->register('newMethod', 'Method', 'newMethod');
$router->register('removeMethod', 'Method', 'removeMethod');
$router->register('updateMethod', 'Method', 'updateMethod');

// Order
$router->register('getOrders', 'Order', 'getOrders');
$router->register('getOrder', 'Order', 'getOrder');
$router->register('newOrder', 'Order', 'newOrder');
$router->register('removeOrder', 'Order', 'removeOrder');
$router->register('updateOrder', 'Order', 'updateOrder');

//

//

//

//

//

//

//

//

//
?>