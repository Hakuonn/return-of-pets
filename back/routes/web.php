<?php
// web.php 將所有的方法寫入以利於前端使用

//Member
$router->register('getMember', 'Member', 'getMember');
$router->register('getMembers', 'Member', 'getMembers');
$router->register('newMember', 'Member', 'newMember');
$router->register('getMember', 'Member', 'getMember');
$router->register('getMember', 'Member', 'getMember');
$router->register('getMember', 'Member', 'getMember');

// Employee
$router->register('getEmployees', 'Employee', 'getEmployees');
$router->register('getEmployee', 'Employee', 'getEmployee');
$router->register('newEmployee', 'Employee', 'newEmployee');
$router->register('removeEmployee', 'Employee', 'removeEmployee');
$router->register('updateEmployee', 'Employee', 'updateEmployee');

// Product
$router->register('getProducts', 'Product', 'getProducts');
$router->register('getProduct', 'Product', 'getProduct');
$router->register('newProduct', 'Product', 'newProduct');
$router->register('removeProduct', 'Product', 'removeProduct');
$router->register('updateProduct', 'Product', 'updateProduct');

// Customer
$router->register('getCustomers', 'Customer', 'getCustomers');
$router->register('getCustomer', 'Customer', 'getCustomer');
$router->register('newCustomer', 'Customer', 'newCustomer');
$router->register('removeCustomer', 'Customer', 'removeCustomer');
$router->register('updateCustomer', 'Customer', 'updateCustomer');

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