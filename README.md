# 집생-BackEnd

집생이 갓생이 되는 그날까지...

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