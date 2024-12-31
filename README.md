# Admin Panel for Attendance Management

## Repository Links
- Full Project: [Admin Panel Attendance](https://github.com/svgbogdnn/adminpanelattendance)
- Backend: [Final-Itam-v](https://github.com/svgbogdnn/Final-Itam-v)
- Business Requirements: [Google Document](https://docs.google.com/document/d/1p4jRWVmtxYdPzHrrp6p5t6t2mQ30udW5dXO5WplEjL4/edit?tab=t.1ne1g710ujzy)

## Project Overview
This project is an admin panel for managing attendance and course interactions, built using the following technology stack:
- **Backend**: Flask (Python)
- **Database**: PostgreSQL
- **Frontend**: HTML/CSS/JavaScript, with React.js for interactive components.

The goal of the project is to simplify the administration of educational processes by providing functionalities such as course management, attendance tracking, statistical analysis, and student feedback management.

## Architecture
The architecture follows a client-server model:
- **Backend**: Provides a REST API for database interaction.
- **Frontend**: Displays data and handles the user interface.

### Key Features:
1. **User Management**: Registration, authentication, password recovery.
2. **Course Management**: Adding, editing, and deleting courses, linking students and teachers.
3. **Attendance Management**: Marking attendance, filtering by course, date, and status, exporting data.
4. **Feedback Analysis**: Students can leave feedback and rate lessons, while teachers analyze the feedback.
5. **Data Export**: Exporting statistics in CSV/Excel formats.

## Backend Highlights
- Flask processes requests and handles user authorization using **Flask-Login**.
- Database migrations are managed with **Alembic/Flask-Migrate**.

## Deployment
The project is deployed on a server configured with **Gunicorn** and **Nginx** for performance and reliability. **GitHub** is used for version control and collaboration.

## Development Workflow
1. Install dependencies listed in `requirements.txt`.
2. Set up the database via **pgAdmin 4**.
3. Perform database migrations.
4. Link static files and configure server infrastructure.

## Future Plans
- UI optimization and improvements.
- Adding advanced analytics modules.
- Supporting integration with external educational platforms.

---







# Админ Панель Посещаемости

## 1. Регистрация и Авторизация
- **Регистрация новых пользователей** (студентов и преподавателей) с валидацией данных.
- **Авторизация** с использованием email и пароля.
- **Восстановление пароля** с помощью контрольных данных.
- **Личный кабинет** для редактирования профиля:
  - Добавление информации о себе (ФИО, дата рождения, контактные данные).
  - Изменение пароля и настроек профиля.

## 2. Работа с курсами
- **Просмотр всех доступных курсов**:
  - Информация о названии курса, описании и преподавателе.
- **Управление курсами** (для преподавателей):
  - Добавление нового курса с указанием параметров.
  - Редактирование существующих курсов.
  - Удаление курсов.

## 3. Посещаемость
- **Отмечание присутствия студентов** на занятиях:
  - Преподаватель может указать статус посещения (присутствовал, отсутствовал, уважительная причина).
- **Просмотр и фильтрация статистики посещаемости**:
  - Фильтрация по курсу, дате, группе или отдельным студентам.
- **Экспорт данных о посещаемости** в формат CSV или Excel.

## 4. Обратная связь
- **Оставление отзывов** студентами:
  - Оценка занятий по шкале и текстовый комментарий.
- **Просмотр обратной связи** преподавателями:
  - Возможность фильтрации отзывов по курсам и датам.

## 5. Экспорт данных
- **Возможность выгрузки данных**:
  - Данные о посещаемости студентов.
  - Отзывы и оценки студентов.
- **Форматы экспорта**:
  - CSV, Excel.

## 6. Уведомления
- **Система уведомлений для преподавателей**:
  - Уведомления о новых отзывах или запросах.
- **Уведомления для студентов**:
  - О новых материалах или изменениях в курсе.


# Gunicorn and Nginx Setup for Flask App

## Installation

### Gunicorn Service Configuration
Create a `gunicorn.service` file in `/etc/systemd/system/` with the following content:

```ini
[Unit]
Description=Gunicorn instance to serve Flask app
After=network.target

[Service]
User=root
Group=www-data
WorkingDirectory=/root/itam
ExecStart=/root/itam/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 wsgi:app

[Install]
WantedBy=multi-user.target
```

### Enable and Start Gunicorn
Run the following commands:

```bash
sudo systemctl daemon-reload
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
```

### Check Server Status
To check the status of the Gunicorn server, use:

```bash
sudo systemctl status gunicorn
```

Example output:

```
● gunicorn.service - Gunicorn instance to serve Flask app
     Loaded: loaded (/etc/systemd/system/gunicorn.service; disabled; vendor preset: enabled)
     Active: active (running) since Thu 2024-12-12 09:04:28 MSK; 2h 38min ago
   Main PID: 106566 (gunicorn)
      Tasks: 5 (limit: 1117)
     Memory: 192.8M
        CPU: 4.316s
     CGroup: /system.slice/gunicorn.service
             ├─106566 /root/itam/venv/bin/python3 /root/itam/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 ws>
             ├─106567 /root/itam/venv/bin/python3 /root/itam/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 ws>
             ├─106568 /root/itam/venv/bin/python3 /root/itam/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 ws>
             ├─106569 /root/itam/venv/bin/python3 /root/itam/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 ws>
             └─106570 /root/itam/venv/bin/python3 /root/itam/venv/bin/gunicorn -w 4 -b 127.0.0.1:8000 ws>
```

### Check Nginx Configuration
To verify that Nginx is working correctly, use:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

### Check Logs

#### Gunicorn Logs
View the latest Gunicorn logs:

```bash
sudo journalctl -u gunicorn.service -n 50 --no-pager
```

#### Nginx Logs
View Nginx error logs:

```bash
sudo tail -f /var/log/nginx/error.log
```

View Nginx access logs:

```bash
sudo tail -f /var/log/nginx/access.log
## Пример использования 
URL: /dashboard
Метод: GET
Описание: Возвращает статистику преподавателя, включая количество студентов, курсов и активных пользователей.
{
  "user_name": "John Doe",
  "user_role": "teacher",
  "total_users": 100,
  "total_students": 80,
  "total_teachers": 20,
  "active_users": 10,
  "active_courses": 5,
  "popular_course": "Mathematics 101",
  "avg_lesson_rating": 4.5,
  "teacher_rating": 4.8
}

URL: /courses
Метод: GET
Описание: Возвращает список курсов, которые ведёт преподаватель.
{
  "courses": [
    {
      "id": 1,
      "name": "Mathematics 101",
      "description": "Basic math course",
      "start_date": "2024-01-01",
      "end_date": "2024-06-01",
      "course_code": "MATH101",
      "category": "Mathematics",
      "students_count": 25
    },
    {
      "id": 2,
      "name": "Physics 201",
      "description": "Advanced physics",
      "start_date": "2024-01-01",
      "end_date": "2024-06-01",
      "course_code": "PHYS201",
      "category": "Physics",
      "students_count": 15
    }
  ]
}

URL: /courses/add
Метод: POST
Описание: Добавляет новый курс в систему.
{
  "name": "Biology 101",
  "description": "Introduction to Biology",
  "start_date": "2024-03-01",
  "end_date": "2024-07-01",
  "course_code": "BIO101",
  "category": "Biology"
}
ответ - 
{
  "message": "Course added successfully!",
  "course_id": 3
}

URL: /attendance
Метод: GET
Описание: Получает записи посещаемости с применением фильтров.
GET /attendance?course=1&date=2024-03-15&status=was
Ответ - 
{
  "attendance_records": [
    {
      "id": 1,
      "lesson_id": 10,
      "student_id": 5,
      "status": "was",
      "comments": "Attended",
      "lesson_date": "2024-03-15"
    }
  ],
  "filters": {
    "course": [1],
    "date": ["2024-03-15"],
    "status": ["was"]
  }
}

URL: /export
Метод: POST
Описание: Экспортирует данные о посещаемости в формате JSON.
{
  "start_date": "2024-03-01",
  "end_date": "2024-03-31",
  "data_type": "attendance",
  "course": 1
}
Ответ - 
{
  "attendance_records": [
    {
      "student_name": "Jane Smith",
      "course_name": "Mathematics 101",
      "lesson_date": "2024-03-15",
      "status": "was",
      "comments": "Attended",
      "reason_of_excuse": null
    }
  ]
}

end.














