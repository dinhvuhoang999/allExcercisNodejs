<!-- @format -->

1. Tạo 1 product, 1 cart
2. product gồm các trường dữ liệu:
   name: string | required,
   description: string,
   images: array | default: [],
   createBy: objectId | required | ref: 'users'

3. cart
   userId: objectId | required | ref: 'users'
   cartInfo: array | default: []

   - trong cartInfo là 1 đối tượng gồm các dữ liệu sau đây:
     productId: objectId | required | ref: 'products'
     quantity: number | required | min: 1 | default: 1

4. Hiển thị danh sách products
