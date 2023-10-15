# 112-1 NTNU TAHRD Database Systems
---
Lecturer：蔡芸琤老師

Name：Yen-Ku, Liu

Department and Grade：TAHRD 2nd Grade

## Note
### Week 2
#### Create Table
```SQL=
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```
#### Insert Into
```SQL=
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

How to change er moudle into mySQL?

### Week 3
#### Join

```SQL=
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName FROM Orders
LEFT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```
<img width="369" alt="image" src="https://github.com/knyliu/DB/assets/131148428/81ffafe8-6403-486e-927c-64027278c7b0">

這是一個SQL查詢語句，用於從名為"Orders"和"Employees"的兩個數據表中檢索信息，並根據"Orders"表中的"OrderID"列對結果進行排序。這個查詢使用了"RIGHT JOIN"來結合這兩個表，基於"EmployeeID"列的匹配條件。

讓我解釋一下每個部分的作用：

1. `SELECT Orders.OrderID, Employees.LastName, Employees.FirstName`: 這部分指定了要從結果中返回的列。具體來說，我們想要返回"Orders"表中的"OrderID"列以及"Employees"表中的"LastName"和"FirstName"列。

2. `FROM Orders`: 這部分指定了要從哪個數據表中檢索數據，這裡是"Orders"表。

3. `RIGHT JOIN Employees`: 這部分指定了要執行的連接類型，這裡是右外部連接（RIGHT JOIN）。右外部連接返回右表（Employees）中的所有記錄，以及與左表（Orders）中的記錄匹配的記錄。如果左表中沒有匹配的記錄，則會在結果中顯示NULL值。

4. `ON Orders.EmployeeID = Employees.EmployeeID`: 這部分指定了連接兩個表的條件。它告訴數據庫使用"EmployeeID"列來匹配兩個表中的記錄。

5. `ORDER BY Orders.OrderID`: 這部分指定了結果的排序方式。我們要按"OrderID"列的值對結果進行升序排序。

總之，這個查詢的目的是返回一個結果集，其中包含了訂單（Orders）的相關信息以及相應的員工（Employees）的姓和名。如果某個訂單的EmployeeID在員工表中找不到對應的記錄，那麼相應的姓和名將為NULL。最終的結果集將按訂單ID升序排列。

#### 在網頁開發中，我們通常使用以下概念和工具：

1. **GET/POST/PUT/DELETE**：這些是HTTP請求方法，用於與伺服器進行通信。它們分別代表：
   - GET：用於獲取資源。
   - POST：用於創建新資源。
   - PUT：用於更新現有資源。
   - DELETE：用於刪除資源。

2. **Query**：在網頁開發中，查詢通常指的是使用URL參數來傳遞資訊給伺服器，通常用於GET請求中，以檢索特定資源或過濾資料。

3. **Axios**：Axios是一個流行的JavaScript函式庫，用於發送HTTP請求。它可用於在瀏覽器或Node.js環境中執行GET、POST、PUT、DELETE等HTTP操作，與伺服器進行通信。

4. **Node.js**：Node.js是一個開源的JavaScript執行環境，可用於伺服器端應用程序。它允許開發者使用JavaScript編寫伺服器端代碼，並處理HTTP請求，例如處理GET、POST、PUT和DELETE請求，並與資料庫進行交互。

5. **React**：React是一個流行的JavaScript庫，用於構建用戶界面。它通常用於前端開發，允許開發者構建動態和交互性的網頁應用程序。React應用程序可以使用Axios向後端的Node.js伺服器發送HTTP請求，以獲取或修改資料，實現前後端的數據交互。

簡而言之，GET/POST/PUT/DELETE是HTTP請求方法，用於與伺服器進行不同類型的操作。Query是用於在URL中傳遞參數的方法。Axios是一個用於發送HTTP請求的JavaScript函式庫，通常在React應用程序中使用，而Node.js則用於構建伺服器端應用程序，處理這些請求。這些技術一起使開發人員能夠建立全堆網頁應用程序，實現前後端的數據交互。

#### 結論（流程）

React 前端

axios 幫助我發送HTTP請求（GET/POST/PUT/DELETE）
//Query通常用於GET請求中，以檢索特定資源或過濾資料

GET/POST/PUT/DELETE之後，是Node.js幫我處理的

#### Data Transfer from Front-end to Database
當您在網頁上輸入完資料並按下送出鍵，資料傳遞的過程涉及多個步驟和不同的層次。以下是一個簡化的資料傳遞過程的描述：

1. **前端：** 當您在網頁上填寫資料並按下送出按鈕時，瀏覽器將收集表單中的資料。這些資料可以是文本、數字、選項等等，通常存儲在JavaScript對象中，或者如果使用HTML `<form>` 元素，則可以被瀏覽器自動轉換成HTTP POST請求的請求主體（request body）。

2. **HTTP請求：** 瀏覽器使用HTTP協議將請求傳送到伺服器。對於表單提交，通常使用HTTP POST請求，請求主體中包含了表單中的資料。這個請求將包括目標URL（通常是伺服器上的一個路由或端點）以及其他HTTP請求標頭和元數據。

3. **伺服器路由處理：** 在伺服器端，伺服器應用程式（這裡是使用Express.js應用程式）會監聽特定的路由。當HTTP POST請求到達伺服器並與特定的路由匹配時，路由處理程序會執行。在這個過程中，伺服器會使用Express中的`req.body`來提取請求主體中的資料。

4. **資料庫存取：** 在路由處理程序中，伺服器應用程式通常會連接到資料庫，如MySQL。它將使用提取的資料來執行SQL查詢，例如INSERT、UPDATE或DELETE，以將資料存儲在資料庫中或從中擷取資料。

5. **資料庫處理：** 資料庫系統將接收到的SQL查詢處理，並根據操作的類型進行相應的動作。如果是INSERT，則資料將被插入到相應的資料表中。如果是UPDATE，則資料將被更新。如果是DELETE，則資料將被刪除。

6. **伺服器回應：** 一旦資料庫操作完成，伺服器會生成一個HTTP回應。這個回應通常包括HTTP狀態碼，用於指示操作是否成功（例如，200表示成功，500表示伺服器錯誤），以及可能的回應主體（response body）。

7. **HTTP回應：** 伺服器將HTTP回應發送回客戶端，這可以是網頁瀏覽器或其他應用程式。客戶端將接收到HTTP回應，並根據狀態碼和回應主體來處理伺服器的回應。如果操作成功，客戶端可能會收到一個成功訊息或其他相關資料。

總之，資料從前端網頁傳遞到伺服器，然後在伺服器上進行處理，最終可能被存儲在資料庫中，這是一個多步驟的過程，涉及HTTP請求和回應以及資料庫操作。

### Week 5
```SQL=
db.students.insertMany([
  { id: 1, name: 'Ryan', gender: 'M' },
  { id: 2, name: 'Joanna', gender: 'F' }
]);
db.students.find({ gender: 'F' });
```


```
db.students.insertMany([
  { id: 1, name: 'Ryan', gender: 'M' },
  { id: 2, name: 'Joanna', gender: 'F' }
]);
db.```table_name```.find({ gender: 'F' });
```

## Assignment
### HW0 - Environment Setup

[YouTube Video](https://youtu.be/CdIlyaEeyC8)  Beginners CRUD Tutorial - ReactS, MySQL, NodeJS

### HW1 - ERD and Databse Create

<img width="697" alt="截圖 2023-09-25 下午12 18 03" src="https://github.com/knyliu/DB/assets/131148428/7ca74de1-1b47-438b-8533-6c0ec9793d45">

[YouTube Video](https://youtu.be/D074LEaJJbE)  ER Model and Database Creation


### HW2 - CRUD in Web App with MySQL


[YouTube Video](https://youtu.be/hk-z6g7t5f8)  CRUD in Web App - Front-end and Back-end Code Explanation and Demonstration


* CRUD in Web App - Create, Read, Update, Delete
* How Data Transfer from Front-end to Database
* Code Explanation - Front-end and Back-end
* MySQL Primary Key Note
* Connection with Front-end and Back-end
* React Axios Query Node.js

### HW3 - CRUD in Web App with MongoDB / MERN

[YouTube Video](https://youtu.be/RqRhHmxrx7w)  CRUD in Web App with MongoDB - Code Explanation, Comparison, and Demonstration

* MERN of CRUD in Web App - Create, Read, Update, Delete
* Code Explanation in Detail- Front-end, Back-end, and Model
* MySQL and MongoDB Code Comparison
* Connection with Front-end and Back-end
* MongoDB Express ReactJS Node.js

```
Markdown：https://markdown.tw/
```
