from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

import gpt_api 
import crawler

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

@app.post("/api/clipped-news/summary")
async def generate_summary(request: Request):
    data = await request.json()
    title = data['title']
    url = data['url']
    news_body = crawler.fetch_article_content(url)
    
    summary = gpt_api.generate_news_summary(title, news_body)
    return summary

@app.post("/api/contents")
async def generate_summary(request: Request):
    data = await request.json()
    
    ###
    category_title_dict = {}

    # cliped_news 내의 각 딕셔너리를 순회하며 categoryName을 기반으로 title을 딕셔너리에 추가
    for news_item in data['cliped_news']:
        category = news_item['categoryName']
        title = news_item['title']
        
        # categoryName을 key로 사용하여 title을 리스트에 추가
        if category in category_title_dict:
            category_title_dict[category].append(title)
        else:
            category_title_dict[category] = [title]

    # 결과를 문자열로 묶기
    result_str = ""
    for category, titles in category_title_dict.items():
        result_str += f'{category} 동향:\n'
        for title in titles:
            result_str += f"{title}\n"
        result_str += '\n'
    ###
    # cliped_news = data['cliped_news']
    contents = gpt_api.generate_news_contents(result_str)
    return contents

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=1004)
