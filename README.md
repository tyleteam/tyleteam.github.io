# tyleteam.github.io
> tyle team technical blog 입니다.

# install
## ruby 설치
- RVM 설치 (ruby version management)

````
curl -sSL https://get.rvm.io | bash -s stable --ruby
````

- ruby 2.2.4 설치

````
rvm install 2.2.4
````

- ruby 버전 default값 변경

````
rvm —default use 2.2.4
````

- ruby path 설정
 - gem environment 실행 후 ruby와 gem excutable path를 복사하여
 - .bash_profile에서 둘다 각각

````
export PATH=$PAHT:path <- 작성하는곳 여기다 작성하자.

$ source .bash_profile
````

##github pages 생성
- github pages 생성후 clone하기

````
git clone https://github.com/tyleteam/tyleteam.github.io.git
````

- clone 받은 repository로 이동

````
cd tyleteam.github.io/
````

- gem bundler 설치

````
gem install bundler
````

- gem plugin 설치

````
bundle 
````

# 실행
- jekyll 서버 실행

````
jekyll serve —watch
````

- `http://localhost:4000` 접속

#배포(퍼블리싱)
````
git add .
git commit -m "메세지 작성"
git pull
git push
````

# 포스팅
## 파일 생성
- 포스트는 `_posts` 폴더에 작성합니다.
- 포스트 파일 네이밍 규칙 `year-month-day-title.md` 형식(ex: 2016-11-21-react.md)
 - title은 영문 및, 하이픈(-)만 사용(고유 url로 사용됌)
 - 최종적으로 포스트의 url(permalink)는 http://blog.tyle.io/title/

## 글쓰기
- 포스트 상단에 [front-matter](https://jekyllrb-ko.github.io/docs/frontmatter/)를 작성한다.

````
---
layout: post
title: '이것이 첫번째 포스트입니다.'
author: 'kwanung'
date: 2016-11-21 10:49
tags: [first,post,test]
---
````

- 내용은 Markdown 으로 작성
 - [gfm](https://guides.github.com/features/mastering-markdown/) 문법, [kramdown](http://kramdown.gettalong.org/parser/kramdown.html) 파서, [rouge](https://sacha.me/articles/jekyll-rouge/) 문법강조기 사용

# 작가등록
- 최초 등록자는 `_authors` 폴더에 등록바람
- sample은 `_authors` 에 있는 파일 참고

##issue
- nokogiri install failed solved

````
http://stackoverflow.com/questions/40038953/installing-nokogiri-on-mac-os-sierra-10-12
````


## 참고
- [jekyll 설치법](http://blog.saltfactory.net/jekyll/upgrade-github-pages-dependency-versions.html)
- [gem bundler 설치법](http://stackoverflow.com/questions/34459720/rails-bundle-command-not-found/34460297)
- [github pages](https://help.github.com/articles/user-organization-and-project-pages/)
