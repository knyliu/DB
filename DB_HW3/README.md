# HW3 提供三個版本，請根據所需選用版本。此外，另提供一個檔案可供測試LLM。

## 版本1 - DB_HW3_v1：
    此版本只爬取網頁的第一頁，也同時是我的思考過程，目的是詳細解釋我的思考過程以及方向，同時解釋程式碼。

## 版本2 - DB_HW3_v2：
    此版本可以爬取網頁中上萬頁的資料，並依照網頁上的分頁儲存成多份 csv files、多份 json files 。
    請注意：目前將檔案頁數設為10，以防止檔案過大。若想爬取整個網頁上的資料，請註解掉以下這行程式碼：```page_number = 10```。

## 版本3 - DB_HW3_v3：
    此版本可以爬取網頁中上萬頁的資料，且只儲存成一個 csv file、一個 json file 。
    請注意：目前將檔案頁數設為20，以防止檔案過大。若想爬取整個網頁上的資料，請註解掉以下這行程式碼：```page_number = 10```。

## 測試LLM - DB_HW3_LLM_test：
    如果在得到LLM的 csv file 後，想測試該 LLM ，歡迎使用這個程式碼來測試。
    你需要準備以下內容以執行該程式：
        * one csv file from DB_HW3_v1, DB_HW3_v2, or DB_HW3_v3
        * one API KEY from Hugging Face
        * the row number (aka the model that you want to use)
        * the problem you want to ask
    若備妥以上內容，請在程式碼 ```#input necessary information here!``` 區域內，放入上述所需資料。
    Keep clicking 'Run' to execute the code and view the result. The output will be displayed at the bottom of this file.

# HW3 provides three versions, please select the version you need. In addition, another file is provided for testing the LLM.

## Version 1 - DB_HW3_v1:
This version only crawls the first page of the website and also outlines my thought process. Its purpose is to provide a detailed explanation of my thought process and direction, along with an explanation of the code.

## Version 2 - DB_HW3_v2:
This version can scrape data from tens of thousands of pages on the website and save it as multiple CSV files according to the website's pagination. Please note: The number of pages for file creation is currently set to 10 to prevent excessively large files. If you want to scrape data from the entire website, please comment out the following line of code: ```page_number = 10```.

## Version 3 - DB_HW3_v3:
This version can scrape data from tens of thousands of pages on the website and save it as a single CSV file. Please note: The number of pages for file creation is currently set to 10 to prevent excessively large files. If you want to scrape data from the entire website, please comment out the following line of code: ```page_number = 10```.

## Test the LLM - DB_HW3_LLM_test：
If you have obtained an LLM's CSV file and want to test the LLM, you are welcome to use this code for testing.
You need to prepare the following information to execute the program:
    * One CSV file from DB_HW3_v1, DB_HW3_v2, or DB_HW3_v3
    * One API KEY from Hugging Face
    * The row number (i.e., the model you want to use)
    * The problem you want to ask
If you have the above information ready, please place it in the "input necessary information here!" section of the code.
Keep clicking 'Run' to execute the code and view the result. The output will be displayed at the bottom of this file.

