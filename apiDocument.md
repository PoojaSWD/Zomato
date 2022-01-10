Page1(Home Page)
> List Of City (http://localhost:8121/location)
https://zomclone.herokuapp.com/location

(this will return all the city) 

>restuart with respect to city
https://zomclone.herokuapp.com/restaurants?city=1


>>>>>>>>>>>>>>>>>>Done
> Restaurant wrt to city
(on the basis city return restaurants)
> List of all meal (http://localhost:8121/mealType)
https://zomclone.herokuapp.com/mealType
(return all the meal types) >>>>>>>>>>>>>>>>>>Done

Page2(Listing Page)
> Find Restaurant on the basis mealType
(this will return all the restaurant of particular meal)
https://zomclone.herokuapp.com/filter/MealId
https://zomclone.herokuapp.com/filter/1


> Filter
>> Cuisine Filter
(Search on basis of mealtype and cuisine)>>>Done( http://localhost:8121/filter/1?cuisine=3)
https://zomclone.herokuapp.com/filter/1?cuisine=3
>> cost Filter
(Search on basis of mealtype and cost) >>DOne (http://localhost:8121/filter/1?lcost=550&hcost=850)
https://zomclone.herokuapp.com/filter/1?lcost=550&hcost=850
>> sort filter
(Price high to low and Low to High)
https://zomclone.herokuapp.com/filter/1?lcost=650&hcost=900&cuisine=2&sortKey=-1
>> Cuisine + Cost
((Search on basis of mealtype and cuisine + cost)>>Done (http://localhost:8121/filter/1?lcost=650&hcost=900&cuisine=2)
https://zomclone.herokuapp.com/filter/1?lcost=650&hcost=900&cuisine=2

Page3(Details Page)
> Get the details of restaurant on basis of Id
(http://localhost:8121/restaurant/12) 
https://zomclone.herokuapp.com/restaurant/12 >>>>>>>>>>>>>>>>>>Done
> Menu wrt to restaurant
(return all items of menu for particular restaurant)>> Done (http://localhost:8121/menu/5)
https://zomclone.herokuapp.com/menu/5

Page4(Summary Page)
> Menu wrt to all ids
(provides item in basis of id) Post> (http://localhost:8121/menuitem)
https://zomclone.herokuapp.com/menuitem
> Post the order
(Insert order details in db)
(http://localhost:8121/placeorder)
https://zomclone.herokuapp.com/placeorder

//Update order with payment details (http://localhost:8121/updateStaus/1)
https://zomclone.herokuapp.com/updateStaus/1



// delete orders (http://localhost:8121/deleteOrders)
https://zomclone.herokuapp.com/deletOrders

Page5(Order Page)
> List all the order placed >>>>>>>>>>>>>>>>>>Done
(http://localhost:8121/orders)
https://zomclone.herokuapp.com/orders