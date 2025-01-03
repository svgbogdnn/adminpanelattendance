# Admin Panel for Attendance Management
# Весь проект

- Весь проект - [Admin Panel Attendance](https://github.com/svgbogdnn/adminpanelattendance)  
- Моя часть, весь бэкенд - [Final-Itam-v](https://github.com/svgbogdnn/Final-Itam-v)  
- Бизнес требования проекта - [Документ](https://docs.google.com/document/d/1p4jRWVmtxYdPzHrrp6p5t6t2mQ30udW5dXO5WplEjL4/edit?tab=t.1ne1g710ujzy)

## Описание проекта

Проект представляет собой админ-панель для управления посещаемостью и взаимодействия с курсами, построенную с использованием стека технологий:  
- **Flask (Python)** для бэкенда,  
- **PostgreSQL** для базы данных,  
- **HTML/CSS/JavaScript** для фронтенда,  
- **React.js** для создания интерактивных компонентов.  

Цель проекта — облегчить администрирование учебного процесса, предоставляя функционал для управления курсами, отслеживания посещаемости, анализа статистики и обратной связи студентов.

## Архитектура проекта

Архитектура проекта построена на принципах клиент-серверной модели:  
- Бэкенд предоставляет **REST API** для взаимодействия с базой данных.  
- Фронтенд отвечает за отображение данных и пользовательский интерфейс.  

Использование Flask позволяет:  
- Эффективно обрабатывать запросы,  
- Проводить миграции базы данных с помощью **Alembic/Flask-Migrate**,  
- Обеспечивать авторизацию пользователей с использованием **Flask-Login**.

## Основные функции

1. **Управление пользователями**:  
   - Регистрация,  
   - Авторизация,  
   - Восстановление пароля.  

2. **Работа с курсами**:  
   - Добавление,  
   - Редактирование,  
   - Удаление курсов,  
   - Привязка студентов и преподавателей.  

3. **Посещаемость**:  
   - Отметка студентов,  
   - Фильтрация по курсам, дате и статусу,  
   - Экспорт данных.  

4. **Обратная связь**:  
   - Студенты могут оставлять отзывы и оценки занятий,  
   - Преподаватели анализируют фидбэк.  

5. **Экспорт данных**:  
   - Выгрузка статистики в формате **CSV/Excel**.

## Интеграция и масштабируемость

Проект интегрируется с сервером, где настроены **Gunicorn** и **Nginx** для обеспечения производительности и надежности.  
**GitHub** используется для управления версионным контролем и совместной работы.

## Инструкция по развертыванию

- Установка всех библиотек из `requirements.txt`.  
- Настройка базы данных через **pgAdmin 4**.  
- Проведение миграций.  
- Подключение статических файлов.  
- Настройка серверной инфраструктуры.

## Будущие улучшения

Проект ориентирован на массовое использование с продуманной архитектурой для обеспечения масштабируемости.  
**Планируются улучшения**:  
- Оптимизация UI,  
- Добавление аналитических модулей,  
- Поддержка новых функций, таких как интеграция с внешними образовательными платформами.

---

## Общее описание проекта

### Цели проекта
Проект представляет собой админ-панель для управления учебным процессом. Основные цели:
1. Автоматизация управления курсами, студентами и преподавателями.
2. Упрощение учета посещаемости с возможностью фильтрации данных и экспорта отчетов.
3. Анализ обратной связи для повышения качества образовательного процесса.
4. Снижение временных затрат преподавателей и администраторов на рутинные операции.

### Задачи проекта
1. Создание единой платформы для хранения и управления данными о курсах, студентах, уроках и посещаемости.
2. Разработка функционала авторизации и аутентификации для безопасности данных.
3. Обеспечение удобного интерфейса для преподавателей и администраторов, включая инструменты фильтрации, статистики и анализа.
4. Реализация функций экспорта данных в различных форматах (CSV, Excel) для отчетности.
5. Интеграция с серверной инфраструктурой для работы в режиме реального времени.

### Концепция проекта
Проект разработан как инструмент для образовательных учреждений, преподавателей и администраторов. Он обеспечивает:
- Полный цикл управления учебными процессами: от регистрации студентов до анализа их успеваемости.
- Минималистичный и интуитивно понятный пользовательский интерфейс.
- Масштабируемую архитектуру, позволяющую легко добавлять новые функции или поддерживать растущее количество пользователей.

### Какие проблемы решает проект
1. **Отсутствие прозрачности в учете посещаемости**:
   - В традиционных системах данные о посещаемости ведутся вручную или в разрозненных таблицах, что приводит к ошибкам и потере данных.
   - Решение: проект предлагает централизованный учет посещаемости с доступом к истории данных.
2. **Сложности с анализом данных**:
   - Обратная связь студентов часто остается неучтенной. Проект систематизирует отзывы и оценки, что помогает преподавателям адаптировать учебный процесс.
3. **Временные затраты**:
   - Рутинные задачи, такие как подготовка отчетов или проверка посещаемости, автоматизируются, что позволяет сосредоточиться на ключевых задачах.
4. **Отсутствие современных технологий в управлении курсами**:
   - Интеграция бэкенда (Flask) и фронтенда (React.js) обеспечивает современный и функциональный подход к управлению.
5. **Ограниченный доступ к данным**:
   - Проект обеспечивает безопасный доступ к данным из любой точки мира благодаря серверной интеграции и поддержке REST API.

Проект направлен на повышение эффективности образовательного процесса, облегчение взаимодействия между участниками и внедрение современных технологий в управление образованием.

---

## Используемые технологии

### 1. PostgreSQL
**Роль:** Реляционная база данных, используемая для хранения всех данных, связанных с проектом. PostgreSQL обеспечивает надежное, производительное и масштабируемое хранение данных.

**Что хранится:**
- Данные пользователей (студенты, преподаватели, администраторы).
- Курсы, уроки, посещаемость, обратная связь и другая учебная информация.
- Структура связана через SQLAlchemy ORM, что упрощает работу с базой на уровне Python.

**Особенности:**
- Использование индексов для ускорения запросов.
- Поддержка сложных операций через SQL-запросы и агрегаты.

---

### 2. Flask
**Роль:** Основной серверный фреймворк, обеспечивающий обработку запросов, маршрутизацию, и связь между клиентской частью и базой данных.

**Задачи Flask:**
- Обработка HTTP-запросов (GET, POST, DELETE и др.).
- Связь с базой данных через SQLAlchemy.
- Реализация API для фронтенда (React) через REST.
- Обеспечение авторизации и аутентификации пользователей с использованием Flask-Login.

**Подключенные расширения:**
- **Flask-SQLAlchemy:** Для работы с базой данных через ORM.
- **Flask-Migrate:** Для управления миграциями базы данных.
- **Flask-CORS:** Для поддержки междоменных запросов между клиентом (React) и сервером (Flask).  
- **Flask-Login:** Для авторизации и управления сеансами пользователей.

---

### 3. React.js
**Роль:** Фронтенд-фреймворк для разработки динамичного и отзывчивого пользовательского интерфейса. React управляет визуализацией и взаимодействием с данными через API.

**Использование React в проекте:**
- Обработка данных, полученных через API, и их отображение.
- Реализация интерактивных фильтров для работы с курсами, уроками и посещаемостью.
- Построение отзывчивого интерфейса, удобного для преподавателей и студентов.
- Подключение библиотеки Axios для работы с HTTP-запросами.

**Почему React:**
- Компонентный подход, упрощающий поддержку и расширение функциональности.
- Обновление интерфейса в реальном времени без перезагрузки страницы.

---

### 4. HTML5
**Роль:** Основной язык разметки, используемый для создания структуры веб-страниц.

**Использование:**
- Создание страниц для логина, регистрации, просмотра курсов и посещаемости.
- Использование шаблонов Jinja2 для динамического заполнения данных.

**Дополнения:**
- Интеграция CSS для стилизации страниц и улучшения их визуального оформления.

---

### 5. CSS (включая Bootstrap)
**Роль:** Отвечает за визуальное оформление проекта, обеспечивает современный и аккуратный дизайн страниц.

**Использование:**
- Создание кастомных стилей через отдельные файлы CSS.
- Использование Bootstrap для адаптивного дизайна (например, для мобильных устройств).
- Определение цветовой схемы, шрифтов и отступов для обеспечения единого стиля.

---

### 6. JavaScript
**Роль:** Обеспечивает динамическое поведение на фронтенде, такие как обработка событий, отправка данных через AJAX и обновление DOM без перезагрузки страницы.

**Примеры использования:**
- Реализация выпадающих списков, интерактивных таблиц и уведомлений.
- Интеграция с API для динамического обновления данных.

---

### 7. Jinja2
**Роль:** Шаблонизатор, используемый Flask для рендеринга HTML-страниц на серверной стороне.

**Задачи:**
- Генерация динамических страниц с данными из базы.
- Упрощение создания сложных страниц за счет использования циклов, условий и фильтров.

---

### 8. Git и GitHub
**Роль:** Контроль версий и управление исходным кодом.

**Использование:**
- Хранение всех файлов проекта в репозитории GitHub.
- Ведение веток для разработки и основного кода.
- Возможность быстрого клонирования проекта для локального развертывания.

---

### 9. Nginx (для сервера)
**Роль:** Веб-сервер, используемый для обработки запросов и балансировки нагрузки.

**Особенности:**
- Служит прокси между клиентом и Flask-приложением.
- Обеспечивает доставку статических файлов (CSS, JS, изображения).

---

### 10. Gunicorn
**Роль:** WSGI-сервер, который запускает Flask-приложение в продакшене.

**Преимущества:**
- Обеспечивает высокую производительность.
- Поддерживает многопоточность для обработки большого числа запросов.

---

### 11. PgAdmin 4
**Роль:** Визуальный инструмент для управления базой данных PostgreSQL.

**Использование:**
- Управление таблицами и данными.
- Проверка и выполнение SQL-запросов.

---

Эти технологии работают в тесной связке, обеспечивая надежную серверную часть, динамичный фронтенд и удобное взаимодействие между пользователями и системой.

---

## Архитектура

Проект построен на основе клиент-серверной архитектуры и разделен на несколько ключевых компонентов: бэкенд, фронтенд, база данных и вспомогательные сервисы. Каждая часть отвечает за свою задачу, а их взаимодействие обеспечивает функциональность системы.

---

### 1. Бэкенд
- **Фреймворк:** Flask (Python)
- **Роль:** Обработка запросов от клиента, управление логикой приложения, связь с базой данных.

**Основные задачи:**
- Реализация REST API для обработки запросов от фронтенда.
- Управление данными через SQLAlchemy ORM: чтение, запись, обновление данных в базе.
- Авторизация и аутентификация пользователей с использованием Flask-Login.
- Реализация бизнес-логики, включая фильтрацию данных, анализ обратной связи и управление посещаемостью.
- Рендеринг HTML-страниц для определенных маршрутов с использованием Jinja2.

---

### 2. Фронтенд
- **Фреймворки:** React.js (для динамичных страниц), HTML5 и CSS3 (для базовой структуры).
- **Роль:** Динамичное отображение данных, получение информации с бэкенда, обработка пользовательского ввода.

**Основные задачи:**
- Обеспечение интерактивности интерфейса, таких как фильтрация, динамическое обновление таблиц и модальных окон.
- Отправка HTTP-запросов к бэкенду через библиотеку Axios.
- Управление состоянием данных на стороне клиента.
- Адаптивный дизайн для работы на разных устройствах (с использованием Bootstrap).

---

### 3. База данных
- **Система:** PostgreSQL
- **Роль:** Хранение всех данных проекта.

**Основные сущности:**
- **Пользователи:** Студенты, преподаватели, администраторы (с ролями).
- **Курсы и уроки:** Информация о курсах, привязанных преподавателям, и расписания уроков.
- **Посещаемость:** Данные о статусе присутствия студентов.
- **Обратная связь:** Отзывы и оценки преподавателей.
- **Логи и статистика:** Для анализа активности системы.

**Взаимодействие:**
- SQLAlchemy ORM используется для работы с данными через Python.
- Flask-Migrate управляет миграциями базы данных (создание и изменение таблиц).

---

### 4. Взаимодействие компонентов

1. **Фронтенд ↔ Бэкенд:**
   - Фронтенд отправляет HTTP-запросы (POST, GET) к API бэкенда, используя библиотеку Axios.
   - Бэкенд обрабатывает запросы, взаимодействует с базой данных и возвращает ответы в формате JSON.
   - **Пример:** При фильтрации посещаемости фронтенд отправляет параметры (курс, дата), а бэкенд возвращает соответствующие записи.

2. **Бэкенд ↔ База данных:**
   - Через SQLAlchemy выполняются запросы к PostgreSQL.
   - **Пример:** На запрос о посещаемости за определенную дату бэкенд строит SQL-запрос к таблице `attendance` и возвращает данные.

3. **Фронтенд ↔ HTML + CSS:**
   - React динамически изменяет содержимое страницы на основе данных, полученных от бэкенда.
   - CSS и Bootstrap обеспечивают стилизацию страниц для создания современного интерфейса.

4. **Деплой на сервер (Nginx + Gunicorn):**
   - Бэкенд запускается через Gunicorn, обеспечивая многопоточность для обработки большого числа запросов.
   - Nginx проксирует запросы от пользователей, распределяя их между компонентами.
   - Статические файлы (CSS, изображения) сервируются через Nginx.

---

### 5. Вспомогательные технологии
- **PgAdmin 4:** Управление базой данных PostgreSQL, выполнение SQL-запросов и настройка схемы базы.
- **Git и GitHub:** Контроль версий и управление исходным кодом для командной работы и надежного сохранения изменений.

---

Эта архитектура обеспечивает модульность, масштабируемость и удобство для разработки, тестирования и развертывания проекта.

---

### Конкретная структура бэкенда

Бэкенд проекта организован по модульному принципу, что позволяет легко масштабировать функционал и поддерживать читаемость кода. Ниже представлено детальное описание структуры:

---

#### 1. Корневая директория:
- **`app.py`**: Основной файл для запуска приложения Flask. 
  - Определяет функцию `create_app`, которая:
    - Конфигурирует приложение.
    - Подключает базы данных.
    - Настраивает миграции, логин-менеджер.
    - Регистрирует маршруты.
- **`config.py`**: Конфигурационный файл с настройками для базы данных, секретных ключей и других параметров.
- **`.env`**: Файл с переменными окружения для хранения конфиденциальных данных, таких как параметры базы данных.

---

#### 2. Директория `app`:
- **`routes/`**:
  - Содержит модули маршрутов, каждый из которых отвечает за свою часть функционала:
    - **`auth.py`**: Реализует авторизацию, регистрацию, восстановление пароля.
    - **`teacher.py`**: Управляет функционалом для преподавателей: посещаемость, экспорт данных, работа с обратной связью.
    - **`authjson.py`** и **`teacherjson.py`**: Предоставляют API для взаимодействия с фронтендом.
    - **`__init__.py`**: Инициализирует пакет маршрутов.
- **`models.py`**:
  - Определяет таблицы базы данных с использованием SQLAlchemy.
  - Реализует объектно-ориентированный подход к работе с базой данных.
  - **Примеры классов**:
    - `User`: Пользователи.
    - `Course`: Курсы.
    - `Lesson`: Уроки.
    - `Attendance`: Посещаемость.
    - `Feedback`: Обратная связь.
- **`utils/`**:
  - Вспомогательные функции:
    - Валидация данных.
    - Хелперы для обработки входных данных.

---

#### 3. Директория `migrations`:
- **`versions/`**: Содержит файлы миграций базы данных, позволяя отслеживать изменения в её структуре.
- **`env.py`** и **`alembic.ini`**: Конфигурационные файлы для работы с Flask-Migrate.

---

#### 4. Директория `templates`:
- **`teacher/`**:
  - HTML-шаблоны для страниц, связанных с функционалом преподавателей: 
    - Управление посещаемостью.
    - Анализ обратной связи.
    - Экспорт данных.
- **Общие шаблоны**:
  - **`navbar.html`**: Используется на всех страницах для поддержания единого стиля.

---

#### 5. Директория `static`:
- **`css/style.css`**:
  - Файл стилей для визуального оформления страниц.
  - Может содержать JS-скрипты для клиентской логики.

---

#### 6. Дополнительные файлы:
- **`requirements.txt`**: Список всех зависимостей Python, необходимых для запуска проекта.
- **`Dockerfile`**: Предназначен для контейнеризации проекта, что упрощает деплоймент (не реализован в данном проекте).

---

### Взаимодействие компонентов:
1. **Маршруты (`routes`)**:
   - Принимают запросы от клиента и обрабатывают их.
   - **Пример**: Запрос на `/teacher/attendance` фильтрует данные посещаемости и передаёт их в HTML-шаблон.
2. **Модели (`models`)**:
   - Представляют данные и обеспечивают связь с базой данных через ORM SQLAlchemy.
3. **Шаблоны (`templates`)**:
   - Рендерятся с помощью Flask-Jinja и передаются клиенту в виде HTML.
4. **Стили (`static`)**:
   - Обеспечивают единое визуальное оформление.

---

# Инструкция по развертыванию проекта

## 1. Локальное развертывание

### Шаги:
1. **Клонирование репозитория:**
   ```bash
   git clone https://github.com/svgbogdnn/adminpanelattendance.git
   cd adminpanelattendance
   ```

2. **Создание виртуального окружения:**
   ```bash
   python3 -m venv venv
   venv\Scripts\activate  # Windows
   ```

3. **Установка зависимостей:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Создание базы данных в PostgreSQL:**
   - Запустите PgAdmin 4 или подключитесь к PostgreSQL через терминал:
     ```sql
     CREATE DATABASE dbitam;
     CREATE USER postgres WITH PASSWORD '1234';
     GRANT ALL PRIVILEGES ON DATABASE dbitam TO postgres;
     ```
   - Убедитесь, что данные подключения совпадают с `SQLALCHEMY_DATABASE_URI` в `config.py`.

5. **Миграции базы данных:**
   ```bash
   flask db init
   flask db migrate -m "First Migration"
   flask db upgrade
   ```

6. **Запуск проекта локально:**
   ```bash
   flask --app app.py run --host=0.0.0.0 --port=5000
   ```

7. **Доступ к проекту:**
   - Перейдите в браузер и откройте: [http://127.0.0.1:5000](http://127.0.0.1:5000).

---

## 2. Развертывание на сервере

### Подготовка сервера:
1. **Подключение к серверу:**
   ```bash
   ssh root@xxx.xxx.xxx.xxx
   ```
   - Введите пароль в выпадающем окне.

2. **Установка необходимых пакетов:**
   ```bash
   sudo apt update
   sudo apt install python3-pip python3-venv nginx postgresql postgresql-contrib -y
   ```

3. **Клонирование репозитория:**
   ```bash
   mkdir /root/itam
   cd /root/itam
   git clone https://github.com/svgbogdnn/adminpanelattendance.git
   ```

4. **Создание виртуального окружения:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

5. **Настройка базы данных:**
   - Войдите в PostgreSQL:
     ```bash
     sudo -u postgres psql
     ```
   - Выполните команды:
     ```sql
     CREATE DATABASE dbitam;
     CREATE USER postgres WITH PASSWORD '1234';
     GRANT ALL PRIVILEGES ON DATABASE dbitam TO postgres;
     ```

6. **Миграции базы данных:**
   ```bash
   flask db upgrade
   ```

---

## Настройка Gunicorn:
1. **Установка Gunicorn:**
   ```bash
   pip install gunicorn
   ```

2. **Запуск Gunicorn:**
   ```bash
   gunicorn -w 4 -b 0.0.0.0:8000 wsgi:app
   ```

3. **Создание службы для Gunicorn:**
   - Создайте файл `/etc/systemd/system/gunicorn.service`:
     ```bash
     sudo nano /etc/systemd/system/gunicorn.service
     ```
   - Пример содержимого:
     ```ini
     [Unit]
     Description=Gunicorn instance to serve the Flask app
     After=network.target

     [Service]
     User=root
     Group=www-data
     WorkingDirectory=/root/itam
     Environment="PATH=/root/itam/venv/bin"
     ExecStart=/root/itam/venv/bin/gunicorn -w 4 -b 0.0.0.0:8000 wsgi:app

     [Install]
     WantedBy=multi-user.target
     ```

4. **Перезагрузка службы:**
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl start gunicorn
   sudo systemctl enable gunicorn
   ```
## Настройка Nginx:

1. **Создание конфигурации для домена:**
   ```bash
   sudo nano /etc/nginx/sites-available/team10
   ```
   - Пример содержимого:
     ```nginx
     server {
         listen 80;
         server_name team10.itatmisis.ru;

         location / {
             proxy_pass http://127.0.0.1:8000;
             proxy_set_header Host $host;
             proxy_set_header X-Real-IP $remote_addr;
             proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
         }

         location /static/ {
             alias /root/itam/static/;
         }
     }
     ```

2. **Активация конфигурации:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/team10 /etc/nginx/sites-enabled
   sudo systemctl restart nginx
   ```

---

## Проверка:

- Проект должен быть доступен по адресу: [http://team10.itatmisis.ru/](http://team10.itatmisis.ru/).

---

Эти шаги обеспечат корректную настройку проекта локально и на сервере.

# Реализованные функции

## 1. Управление посещаемостью
- **Описание:** Система позволяет преподавателям отмечать посещаемость студентов, редактировать статусы и просматривать историю посещаемости.
- **Функционал:**
  - Отметка студентов как "присутствующих" (was) или "отсутствующих" (not).
  - Возможность массового обновления статусов.
  - Фильтрация посещаемости по курсу, дате и статусу.
- **Пример использования:**
  - Преподаватель выбирает курс и дату, отмечает всех студентов как присутствующих, а затем сохраняет изменения.

## 2. Управление курсами
- **Описание:** Преподаватели могут создавать, редактировать и удалять курсы.
- **Функционал:**
  - Добавление нового курса с указанием названия, описания, преподавателя и списка студентов.
  - Просмотр активных курсов с возможностью фильтрации.
- **Пример использования:**
  - Преподаватель добавляет новый курс, указывает список студентов и задает даты начала и окончания.

## 3. Управление уроками
- **Описание:** Возможность создавать и управлять запланированными уроками в рамках курса.
- **Функционал:**
  - Создание уроков с указанием темы, даты, времени и локации.
  - Просмотр списка всех уроков по выбранному курсу.
- **Пример использования:**
  - Преподаватель создает урок на 15:00 с темой "Основы NLP" и добавляет информацию о кабинете.

## 4. Система обратной связи
- **Описание:** Студенты могут оставлять отзывы и оценки уроков, а преподаватели анализировать эти данные.
- **Функционал:**
  - Оставление оценок и комментариев.
  - Просмотр преподавателями анонимной статистики обратной связи.
- **Пример использования:**
  - Студент оценивает урок, оставляет комментарий, преподаватель просматривает среднюю оценку за неделю.

## 5. Экспорт данных
- **Описание:** Генерация отчетов о посещаемости и обратной связи.
- **Функционал:**
  - Экспорт данных в форматах CSV/Excel.
  - Возможность фильтрации перед экспортом.
- **Пример использования:**
  - Администратор создает отчет о посещаемости студентов за последние 30 дней и экспортирует его для анализа.

# Дополнительные функции

## 6. Система аутентификации
- **Описание:** Авторизация и регистрация пользователей с разными ролями.
- **Функционал:**
  - Регистрация студентов и преподавателей.
  - Авторизация через email и пароль.
  - Восстановление пароля через email.
- **Пример использования:**
  - Пользователь, забывший пароль, вводит email и получает ссылку на восстановление.

## 7. Роли пользователей
- **Описание:** Разделение ролей для студентов, преподавателей и администраторов.
- **Функционал:**
  - У каждого пользователя уникальные права доступа.
  - Администраторы могут добавлять новых пользователей и управлять их ролями.
- **Пример использования:**
  - Администратор создает нового преподавателя и предоставляет ему доступ к курсам.

## 8. Интерактивная статистика
- **Описание:** Отображение ключевых метрик и графиков в реальном времени.
- **Функционал:**
  - Статистика по посещаемости, курсам и активности пользователей.
  - Визуализация данных с помощью графиков.
- **Пример использования:**
  - Преподаватель открывает панель статистики, чтобы узнать, какой урок вызвал наибольший интерес.

## 9. Пользовательский интерфейс
- **Описание:** Простой и интуитивно понятный дизайн для работы с системой.
- **Функционал:**
  - Темная и светлая темы интерфейса.
  - Навигация через меню и панель быстрого доступа.
- **Пример использования:**
  - Пользователь переключается между страницами курсов, посещаемости и уроков.

## 10. Уведомления
- **Описание:** Система уведомлений для студентов и преподавателей.
- **Функционал:**
  - Отправка напоминаний о запланированных уроках.
  - Уведомления о новых отзывах и комментариях.
- **Пример использования:**
  - Преподаватель получает уведомление о новом комментарии на урок.

---

Этот функционал делает проект универсальным инструментом для управления образовательным процессом, увеличивая удобство и эффективность взаимодействия между всеми участниками.

# Связь с GitHub и Система безопасности проекта

## Связь с GitHub

- **Интеграция с репозиторием:**
  - Проект размещен в репозитории GitHub, обеспечивая удобство для версионного контроля, командной работы и хранения исходного кода.
  - Используется стандартный Git workflow:
    - `git clone` для загрузки проекта.
    - `git pull` для получения актуальной версии.
    - `git push` для отправки изменений.
  - В репозитории структурированы папки для фронтенда, бэкенда, шаблонов, статики и других ресурсов.

- **Преимущества:**
  - Удобное обновление файлов на сервере через `git pull`.
  - Возможность совместной разработки с использованием веток (например, master, dev).
  - Отслеживание всех изменений, их авторов и истории коммитов.

---

## Система безопасности

- **Авторизация и аутентификация:**
  - Реализована с помощью библиотеки Flask-Login.
  - Пользователи обязаны вводить email и пароль для входа в систему.
  - Для пользователей с разными ролями (студенты, преподаватели, администраторы) предусмотрены отдельные права доступа.
  - Функция восстановления пароля через email для защиты учетных записей.

- **Хранение паролей:**
  - Пароли хранятся в базе данных PostgreSQL в зашифрованном виде с использованием библиотеки Werkzeug (bcrypt/sha256).
  - Используется метод `generate_password_hash()` для хэширования паролей и `check_password_hash()` для проверки введенных данных.

- **Валидация данных:**
  - Все данные, отправляемые пользователями через формы, проходят строгую проверку с помощью кастомных валидаторов и библиотек валидации.
  - Примеры:
    - Email проверяется на корректный формат.
    - Поля форм ограничиваются длиной и типом вводимых данных.

- **Механизмы защиты:**
  - **CSRF-токены:** Flask автоматически генерирует токены для защиты от межсайтовых запросов.
  - **CORS-защита:** Настроена библиотека Flask-CORS для предотвращения неавторизованных запросов с других доменов.
  - **Ограничение доступа:**
    - Доступ к страницам ограничен ролями через декораторы.
    - Для неавторизованных пользователей предусмотрено перенаправление на страницу входа.
  - **Защита от SQL-инъекций:** Используются подготовленные SQL-запросы через SQLAlchemy.

# Проблемы в процессе

Очевидно было много ошибок в процессе создания проекта, буквально любое более-менее масштабное внедрение, например, какой-нибудь функции, влекло за собой ошибку, а то и не одну. Еще обиднее, когда ошибки были сделаны по глупости, но, например, с Flask-CORS ошибка точно моя любимая, про нее расписывать слишком долго. Вот основные проблемы:

## 1. Flask не видел PostgreSQL
- **Проблема:** На этапе подключения базы данных Flask не распознавал соединение с PostgreSQL из-за неверного значения `SQLALCHEMY_DATABASE_URI` и отсутствия правильно настроенного драйвера.
- **Решение:**
  - Установлен драйвер psycopg2.
  - Формат строки подключения (`postgresql://user:password@host/dbname`) был приведен в соответствие с документацией.
  - Добавлены тестовые запросы для проверки соединения через SQLAlchemy.

## 2. HTML не видел CSS и Flask одновременно
- **Проблема:** Статические файлы (CSS, изображения, JavaScript) не подгружались, так как путь в HTML-шаблонах был задан некорректно.
- **Решение:**
  - Настроены пути к статическим файлам через функцию `url_for('static', filename='path/to/file')`.
  - Убедились, что папка `static` находится в корне проекта.
  - Добавлен дополнительный CSS для улучшения визуального отображения страниц.

## 3. Изначальная структура проекта была неправильно спроектирована
- **Проблема:** Проект начинался с хаотичной структуры без разделения на модули для моделей, маршрутов и утилит, что делало код трудно читаемым.
- **Решение:**
  - Проект был реорганизован:
    - Созданы отдельные папки для маршрутов (`routes`), моделей (`models`) и утилит (`utils`).
    - Flask Blueprints внедрены для маршрутов `auth` и `teacher`, чтобы разделить их логику.
  - Упрощена поддержка за счет четкой структуры.

## 4. Связь сервера и локального проекта
- **Проблема:** Проект, запущенный локально, не переносился на сервер корректно. Файлы терялись, статические ресурсы не загружались, а сервер возвращал ошибки.
- **Решение:**
  - Для переноса файлов на сервер использовались команды `scp` и `git pull`.
  - На сервере был установлен Gunicorn как WSGI-сервер для запуска приложения.
  - Nginx был настроен для обработки запросов и подключения домена.
  - Проблемы с портами (например, занятый порт 8000) решались через команды `sudo fuser -k 8000/tcp`.

## 5. Сложности связи React и Flask
- **Проблема:** React и Flask работали в разных средах, а их интеграция требовала продуманной настройки API.
- **Решение:**
  - Созданы REST API в Flask с использованием библиотек Flask-RESTful и Flask-CORS для кросс-доменных запросов.
  - React-приложение подключалось к бэкенду через `fetch` и Axios.
  - Отлажен процесс авторизации, передачи токенов и обработки запросов.

## 6. Ошибки в валидации данных
- **Проблема:** Некорректный ввод данных (например, пустые поля или неверные форматы) приводил к падению приложения.
- **Решение:**
  - Реализованы кастомные валидаторы для форм с использованием WTForms и утилит.
  - Добавлены сообщения об ошибках на фронтенде через Flask-Flash.

## 7. Неверное взаимодействие между фронтендом и бэкендом
- **Проблема:** Фронтенд иногда отправлял некорректные запросы, что вызывало 500 ошибки.
- **Решение:**
  - Протестированы все API-эндпоинты с использованием Postman.
  - Добавлены проверки на стороне бэкенда, чтобы перехватывать и корректно обрабатывать ошибки.

## 8. Ошибки с миграциями базы данных
- **Проблема:** При добавлении новых моделей или полей миграции не применялись корректно.
- **Решение:**
  - Старые миграции были удалены, а новые созданы заново.
  - Добавлены команды для обновления структуры базы данных:
    - `flask db init`, `flask db migrate`, `flask db upgrade`.

## 9. Проблемы с авторизацией и маршрутизацией
- **Проблема:** Некоторые маршруты возвращали 404 из-за отсутствия авторизации или неправильной настройки.
- **Решение:**
  - Проверка текущего пользователя (`current_user`) добавлена во все защищенные маршруты.
  - Неправильные URL были перенаправлены на страницу логина.

## 10. Отсутствие опыта работы с такими большими проектами
- **Проблема:** Большая часть проблем возникала из-за недостаточного опыта работы с крупными проектами, особенно в связке с сервером.
- **Решение:**
  - Постепенное изучение документации Flask, PostgreSQL, React, и Nginx.
  - Решение проблем по мере их появления с помощью тестирования, логов и поддержки сообщества.

# Преимущества проекта

## 1. Польза для образовательного процесса
- **Удобство учета посещаемости:** Преподаватели могут быстро отмечать присутствие или отсутствие студентов, а также просматривать статистику по курсам и урокам. Это значительно сокращает время на административные задачи.
- **Сбор и анализ обратной связи:** Возможность получать отзывы от студентов о курсах и преподавателях помогает улучшать качество обучения.
- **Прозрачность данных:** Доступ к отчетам и статистике делает образовательный процесс более прозрачным как для преподавателей, так и для студентов.

## 2. Техническая гибкость
- **Кроссплатформенность:** Проект работает на любых устройствах благодаря современному стеку технологий, включая React, Flask и PostgreSQL.
- **Масштабируемость:** Архитектура позволяет легко добавлять новые функции, например управление заданиями, уведомления или автоматическую генерацию сертификатов.
- **Гибкая настройка:** Преподаватели могут фильтровать данные по курсам, статусу или дате, что делает работу с платформой максимально удобной.

## 3. Простота использования
- **Интуитивный интерфейс:** Понятный и минималистичный дизайн, подходящий как для преподавателей, так и для студентов.
- **Удобная регистрация и авторизация:** Включает традиционную форму входа и возможность интеграции с Google.
- **Доступность:** Сайт адаптирован для работы на мобильных устройствах, что удобно для пользователей в дороге.

## 4. Интеграция с существующими системами
- **Работа с базой данных:** PostgreSQL предоставляет мощный и надежный инструмент для хранения больших объемов данных.
- **Связь между фронтендом и бэкендом:** React обеспечивает динамичное и быстрое отображение данных, а Flask позволяет создавать надежный API для обработки запросов.

## 5. Автоматизация процессов
- **Генерация отчетов:** Быстрое формирование отчетов по посещаемости и обратной связи экономит время преподавателей.
- **Групповое редактирование данных:** Функции массового обновления статусов посещаемости упрощают управление большими группами студентов.
- **Экспорт данных:** Интеграция с Excel позволяет создавать удобные таблицы для дальнейшего анализа.

## 6. Безопасность
- **Защищенные данные:** Использование современных методов хэширования паролей и проверка на уровне валидаторов предотвращает несанкционированный доступ.
- **Авторизация и права доступа:** Гибкая система ролей обеспечивает доступ к функциям только для авторизованных пользователей.

## 7. Уникальность
- **Целенаправленный подход:** Проект разработан специально для образовательных учреждений, что делает его более подходящим, чем универсальные CRM-системы.
- **Комбинация технологий:** Уникальная интеграция React и Flask предоставляет высокую производительность и удобство для конечных пользователей.
- **Адаптация под нужды пользователей:** Возможность настроить функционал под специфические требования конкретного учебного заведения.

## 8. Легкость поддержки и развития
- **Документированная архитектура:** Подробное описание структуры проекта упрощает поддержку и внедрение новых возможностей.
- **Связь с GitHub:** Наличие версионного контроля позволяет команде отслеживать изменения и быстро исправлять ошибки.
- **Обучающий эффект:** Проект служит хорошей основой для освоения современных технологий и инструментов разработки.

# Перспективы развития

Проект уже реализует базовый функционал для управления посещаемостью, обратной связью, курсами и статистикой. Однако есть множество направлений для его улучшения:

## 1. Интерактивный профиль пользователей
- **Описание:**
  - Добавление раздела с персонализированной статистикой, графиками прогресса, историей посещаемости и достижениями.
  - Возможность загружать и редактировать аватар.

## 2. Продвинутая авторизация
- **Описание:**
  - Поддержка OAuth авторизации через Google, Facebook и другие популярные сервисы.
  - Реализация двухфакторной аутентификации (2FA) для повышения безопасности.

## 3. Улучшение регистрации
- **Описание:**
  - Валидация данных в реальном времени на клиентской стороне.
  - Возможность регистрации через приглашения от преподавателей.

## 4. Расширение функционала для студентов
- **Описание:**
  - Полная интеграция с фронтендом React для улучшения пользовательского опыта.
  - Личный кабинет студента с отображением домашних заданий, уведомлений и статистики.

## 5. Интерактивный дашборд
- **Описание:**
  - Визуализация данных в реальном времени с использованием графиков и диаграмм.
  - Возможность добавлять и редактировать курсы и занятия прямо с дашборда.

## 6. Экспорт данных
- **Описание:**
  - Поддержка экспорта данных в PDF, CSV и другие форматы.
  - Добавление гибких фильтров для создания отчетов.

## 7. Улучшение системы обратной связи
- **Описание:**
  - Введение анонимных отзывов и рейтингов.
  - Возможность преподавателям оставлять публичные ответы на отзывы.

## 8. Оптимизация производительности
- **Описание:**
  - Переработка запросов к базе данных для сокращения времени отклика при большом количестве пользователей.
  - Введение кеширования наиболее часто запрашиваемых данных.

## 9. Обратная связь и уведомления
- **Описание:**
  - Добавление системы пуш-уведомлений для новых заданий или изменений в расписании.

## 10. Мобильная адаптация
- **Описание:**
  - Оптимизация интерфейса под мобильные устройства.
  - Возможность создания мобильного приложения на основе текущей архитектуры.

---

Эти улучшения сделают проект более функциональным, удобным и готовым к использованию в масштабах крупных учебных заведений.
