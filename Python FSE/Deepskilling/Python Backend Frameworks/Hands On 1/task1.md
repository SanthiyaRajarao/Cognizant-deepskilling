```
# =====================================================
# Hands-On 1 - Web Framework Foundations
# =====================================================


# -----------------------------------------------------
# 1. Request-Response Cycle
# -----------------------------------------------------

# GET /api/courses/ request flow:
#
# Browser
#    ↓
# URL Router (urls.py)
#    ↓
# Middleware
#    ↓
# View (views.py)
#    ↓
# Model (Database Query)
#    ↓
# Response
#    ↓
# Browser

# The browser sends a request. Django matches the URL,
# calls the View, the View gets data from the Model,
# and returns the response to the browser.


# -----------------------------------------------------
# 2. Middleware
# -----------------------------------------------------

# Middleware processes every request before it reaches
# the View and every response before it is sent back.

# SecurityMiddleware:
# Provides security features like HTTPS protection.

# SessionMiddleware:
# Manages user session and login information.


# -----------------------------------------------------
# 3. WSGI vs ASGI
# -----------------------------------------------------

# WSGI:
# Handles synchronous requests.
# Default interface used by Django.

# ASGI:
# Handles asynchronous requests.
# Used for WebSockets, chat apps, and real-time features.


# -----------------------------------------------------
# 4. MVC to Django MVT
# -----------------------------------------------------

# MVC:
# Model - Data
# View - User Interface
# Controller - Business Logic

# Django MVT:
# Model    -> Model
# View     -> Template
# Controller -> View

# Django's View works like the Controller in MVC,
# while the Template acts as the View.
```
