# 我的餐廳清單 V 1.1.0
可以看到8家不同類型餐廳清單，並且可以得知餐廳資訊。例如: 地址、評分等

## 功能表
- 可以按照餐廳名稱進行搜尋
- 可以檢視餐廳類別、地址、電話、評分、圖片
- 可以修改餐廳類別、地址、電話、評分、圖片
- 可以新增餐廳類別、地址、電話、評分、圖片
- 可以刪除餐廳資訊

### 搜尋功能
輸入關鍵字，找尋合適餐廳

### 檢視功能
點選圖片或是icon可以檢視餐廳資訊

### 修改功能
點選icon可以修改餐廳資訊

### 刪除功能
點選icon可以餐廳資訊

### 新增功能
右上角可以點選新增餐廳資訊

### 排序功能
可以點選單選擇排序方式

## 安裝方式
1. 開啟終端機(Terminal)cd 到存放專案本機位置並執行:
```
 $ git clone https://github.com/ahnochen1029/restaurant_list_remote.git
```

2. 開啟終端機，進入該資料夾
```
 $ cd restaurant_list
```

3. 安裝npm express套件
```
 $ npm init -y
 $ npm install express
```

4. 安裝npm express-handlebars套件
```
 $ npm i express-handlebars
```

5. 安裝npm body-parser套件
```
 $ npm i body-parser
```

6. 安裝npm mongoose套件
```
 $ npm i mongoose
```

7. 安裝npm method-override
```
 $ npm i method-override
```

8. 啟動伺服器
```
 $ npm run dev
```

9. 關閉伺服器
```
 連續兩下CTRL+C 離開批次工作
```

## 環境版本
1. [Express](https://expressjs.com/en/starter/installing.html) 4.17.1
2. [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) 5.1.0
3. [Mongoose] 5.10.2
4. [Body-parser] 1.19.0
5. [method-override] 3.0.0