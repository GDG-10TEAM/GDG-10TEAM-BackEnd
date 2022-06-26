# 집생-BackEnd

집생이 갓생이 되는 그날까지...


<img width="399" alt="image" src="https://user-images.githubusercontent.com/72638829/175795225-cedd1bd3-9d00-417e-8562-db050082981d.png"><img width="402" alt="image" src="https://user-images.githubusercontent.com/72638829/175795332-8ba70701-400e-48b6-8572-6071c2fb23c6.png">
<img width="402" alt="image" src="https://user-images.githubusercontent.com/72638829/175795282-320ef86d-4e9f-45e2-83d5-375b8ef3da7a.png">




## api 명세

### user

- **POST** user/:userId
- **GET** user/:userId → seq 리턴

### userTask : 할당되어 있는 유저 할일

- **GET** user/:user_seq/task
- **POST** user/:user_seq/task
- **DELETE** user/:user_seq/task/:task_id
- **PATCH** user/:user_seq/task/:task_id

```jsx
// body
{
  task_seq: int
  frequency: string // 크론잡 (optional)
  start_date: dateTime
  end_date: dateTime // (optional)
}
```

### Task

- **GET** task

### Category

- **GET** category/list
- **GET** category/:category_seq/user/:userId/

### TaskHistory

- **GET** taskHistory/:category_seq/user/:user_seq


### 기술 스택

<img width="792" alt="image" src="https://user-images.githubusercontent.com/72638829/175795435-aad401ed-dc55-458b-8ab7-5e5ac70f71c6.png">

```
Node.js
Nest.js
MySQL
Typescript
TypeOrm
```
