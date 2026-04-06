import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Обработка заявки на покупку билета / запись на спектакль. Отправляет уведомление на email."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')

    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    theater = body.get('theater', '').strip()
    show = body.get('show', '').strip()
    date = body.get('date', '').strip()
    seats = body.get('seats', 1)
    comment = body.get('comment', '').strip()

    if not name or not phone or not theater:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Заполните обязательные поля: имя, телефон, театр'})
        }

    smtp_email = os.environ['SMTP_EMAIL']
    smtp_password = os.environ['SMTP_PASSWORD']
    notify_email = os.environ['NOTIFY_EMAIL']

    subject = f'Новая заявка на билет — {theater}'

    html_body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0d0d0d; color: #f5f0e8; padding: 32px; border-radius: 8px;">
      <h2 style="color: #E05C2A; font-size: 22px; margin-bottom: 24px; border-bottom: 1px solid #333; padding-bottom: 12px;">
        🎭 Новая заявка на билет
      </h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #888; width: 140px; vertical-align: top;">Имя:</td>
          <td style="padding: 10px 0; font-weight: bold;">{name}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #888; vertical-align: top;">Телефон:</td>
          <td style="padding: 10px 0; font-weight: bold;">{phone}</td>
        </tr>
        {"<tr><td style='padding: 10px 0; color: #888; vertical-align: top;'>Email:</td><td style='padding: 10px 0;'>" + email + "</td></tr>" if email else ""}
        <tr>
          <td style="padding: 10px 0; color: #888; vertical-align: top;">Театр:</td>
          <td style="padding: 10px 0; color: #E05C2A; font-weight: bold;">{theater}</td>
        </tr>
        {"<tr><td style='padding: 10px 0; color: #888; vertical-align: top;'>Спектакль:</td><td style='padding: 10px 0;'>" + show + "</td></tr>" if show else ""}
        {"<tr><td style='padding: 10px 0; color: #888; vertical-align: top;'>Дата:</td><td style='padding: 10px 0;'>" + date + "</td></tr>" if date else ""}
        <tr>
          <td style="padding: 10px 0; color: #888; vertical-align: top;">Кол-во билетов:</td>
          <td style="padding: 10px 0;">{seats}</td>
        </tr>
        {"<tr><td style='padding: 10px 0; color: #888; vertical-align: top;'>Комментарий:</td><td style='padding: 10px 0; font-style: italic;'>" + comment + "</td></tr>" if comment else ""}
      </table>
      <p style="margin-top: 24px; color: #555; font-size: 12px;">Заявка получена через сайт Театры Оренбурга</p>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_email
    msg['To'] = notify_email
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(smtp_email, smtp_password)
        server.sendmail(smtp_email, notify_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }
