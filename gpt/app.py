from fastapi import FastAPI, HTTPException, Request

import gpt_api 
import crawler

app = FastAPI()

@app.post("/api/summary")
async def generate_summary(request: Request):
    data = await request.json()
    title = data['title']
    url = data['url']
    news_body = crawler.fetch_article_content(url)
    
    summary = gpt_api.generate_news_summary(title, news_body)
    return summary

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=1004)
