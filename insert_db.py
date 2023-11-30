import pandas as pd
import mysql.connector
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd='1234',
    database="MusmaNewsletterDB"
)
cursor = conn.cursor()
df = pd.read_csv('./clipped_news_1128.csv')
for index, row in df.iterrows():
    cursor.execute('INSERT INTO clipped_news (title, url, category_id, publication_date) VALUES (%s, %s, %s, %s)', list(row))
conn.commit()
conn.close()