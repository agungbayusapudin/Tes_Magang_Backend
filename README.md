# Documentation API

### API DOCS SWAGGER:

```json
http://localhost:3000/api-docs
```

# Sturktur Code

Struktur code dengan menggunakan arsitektur Feature Based Untuk lebih Modular dan clean:

```markdown

app
	/config
		/drizzle.config.ts
	/src
		/docs
			/swagger.ts
			/index.ts
			/swagger.json
		/product
			/controller
			/service
			/repository
			/router
			/model
		
		/order
			/controller
			/service
			/repository
			/router
			/model
		db
			/schmea
			clients.ts
.env
server.ts
index.ts
package-lock.json
package.json
README.md
tsconfig.json
```

# Cara Menjalankan Project

Melakukan clone project pada github

```markdown
git clone https://github.com/agungbayusapudin/Tes_Magang_Backend.git
```

selanjutnya adalah masuk ke directory hasil clone:

```json
cd <nama folder clone project>
```

Setelah langkah sebelumnya berhasil, selanjutnya yang anda butuhkan adalah pastikan anda menginstall node js, jika belum berikut adalah langkahnya:

Macbook :

```markdown
brew install node
```

windows:

1. kunjungi [https://nodejs.org/id](https://nodejs.org/id)
2. download versi TLS (yang stabil)
3. Buka file .pkg -> ikuti instalasi

Setelah instalasi selesai selanjutnya adalah menjalankan di terminal:

```markdown
node -v
```

Setelah menginstall node atau jika sudah ada, selanjutnya adalah menjalankan di terminal pada project sebagai berikut:

```json
npm install
```

Setelah melakukan instalasi, Selanjutnya adalah ubah file **.env** dengan data yang sesuai dengan PostgresSQL anda, berikut adalah yang harus dirubah seperti ini:

```markdown
DATABASE_URL=postgres://{username}:{password}@{netloc}:{port}/ecommerce_db

##pastikan databse sudah dibuat dengan

CREATE DATABASE ecommerce_db;
```

Pastikan sesuai dengan apa yang harus disi, jika sudah.

Pastikan root file tidak ada file drizzle, jika ada hapus file tersebut.

jalankan pada terminal:

```markdown
npm run drizzle:generate

## selanjutnya adalah

npm run drizzle:migrate
```

Setelah semuanya langkah sudah jalankan dengan benar, selanjutnya adalah menjalankan proyek dengan:

```markdown
npm run dev
```

Jika ada error pastikan tidak ada langkah yang terlewat

# API Service APP

## 1. Create Product

     **Endpoint :** /products

**method:** POST

     **Deskripsi:** Digunakan untuk membuat product baru

     **Request Body:** 

```json
{
  "name": "Smartphone",
  "description": "Latest model with advanced features",
  "price": 999.99
}
```

**Response Body:**

- 201 (ok)
    
    ```json
    {
      "id": 2,
      "name": "Smartphone",
      "description": "Latest model with advanced features",
      "price": 999.99
    }
    ```
    
- 404 (Not Found)
- 500 (Internal Server Error)

## 2. Get All Product

     **Endpoint : /products**

method: GET

     Deskripsi: Digunakan untuk mendapatkan seluruh data

**Response Body:**

- 200 (ok)
    
    ```json
    [
      {
        "id": 2,
        "product_id": 2,
        "quantity": 0,
        "total_price": 0,
        "createdAt": "2025-04-17T11:24:54.207Z"
      }
    ]
    ```
    
- 500 (Internal Server Error)

## 3. Update Product

     **Endpoint** : /products/{id}

**method:** PUT

     **Deskripsi:** Digunakan untuk melakukan edit data berdasarkan id

     **Request Body:** 

```json
{
  "name": "Smartphone",
  "description": "Latest model with advanced features",
  "price": 999.99
}
```

**Response Body:**

- 200 (ok)
    
    ```json
    {
      "id": 2,
      "name": "Smartphone",
      "description": "Latest model with advanced features",
      "price": 999.99
    }
    ```
    
- 404 (Not Found)
- 500 (Internal Server Error)

## 4. Delete Product

     **Endpoint** : /products/{id}

**method:** DELETE

     Deskripsi: Digunakan untuk menghapus product berdasarkan id

**Response Body:**

- 204 (No content)
- 404 (Not Found)
- 500 (Internal Server Error)

## 5. Create Orders

     **Endpoint** : /orders

**method:** POST

     Deskripsi: Digunakan untuk membuat order baru

     **Request Body:** 

```json
{
  "product_id": 2,
  "quantity": 2
}
```

**Response Body:**

- 201 (ok)
    
    ```json
    {
      "id": 2,
      "product_id": 2,
      "quantity": 1,
      "total_price": 999.99,
      "createdAt": "2025-04-17T11:24:54.206Z"
    }
    ```
    
- 404 (Not Found)
- 500 (Internal Server Error)

## 6. Get All Orders

     **Endpoint** : /orsers

**method:** GET

     Deskripsi: Digunakan untuk membuat orers baru

**Response Body:**

- 200 (ok)

```json
[
  {
    "id": 1,
    "product_id": 1,
    "quantity": 2,
    "total_price": "1999.98",
    "created_at": "2025-04-17T19:03:40.095Z"
  }
]
```

- 500 (Internal Server Error)

## 7. Documentasi Swagerr

     **Enpoint:** /api-docs

# Cara Menggunakan Endpoint

## 1. Create Product

     curl:

```json
curl -X 'POST' \
  'http://localhost:3000/products' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Smartphone",
  "description": "Latest model with advanced features",
  "price": 999.99
}'
```

## 2. Get All Product

     **curl:**

```json
curl -X 'GET' \
  'http://localhost:3000/products' \
  -H 'accept: application/json'
```

## 3. Update Product

     curl:

```json
curl -X 'PUT' \
  'http://localhost:3000/products/1' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Smartphone",
  "description": "Latest model with advanced features",
  "price": 999.99
}'
```

## 4. Delete Product

     curl:

```json
curl -X 'DELETE' \
  'http://localhost:3000/products/1' \
  -H 'accept: */*'
```

## 5. Create Orders

     curl:

```json
curl -X 'POST' \
  'http://localhost:3000/orders' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "product_id": 1,
  "quantity": 2
}'
```

## 6. Get All Orders

    curl:

```json
curl -X 'GET' \
  'http://localhost:3000/orders' \
  -H 'accept: application/json'
```