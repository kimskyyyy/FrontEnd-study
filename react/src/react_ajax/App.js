import React, { Component } from 'react';

class Nav extends Component {
    // state = {
    //     list:[]
    // }
    render() {
        // listTag 배열 생성
        var listTag = [];
        for(var i = 0; i<this.props.list.length; i++) {
            var li = this.props.list[i];
            // li 컴포넌트를 listTag 배열에 추가
            listTag.push(
            <li key={li.id}>
                {/* onClick함수에 id를 인자로 전달하기 위해 <a>컴포넌트의 data-id props에 id 저장 
                    이 값에는 e.target.dataset.id로 접근할 수 있음
                */}
                <a href={li.id} data-id={li.id} onClick={function(e) {
                    e.preventDefault();
                    console.log('trigger');
                    // onClick 함수를 클릭하면 id값이 인자로 전달됨
                    this.props.onClick(e.target.dataset.id);
                }.bind(this)}>
                {li.title}
                </a>
            </li>);
        }

        return (
            <nav>
                {listTag}
            </nav>
        );
    }
}

// Article 컴포넌트 생성
class Article extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

class NowLoading extends Component {
    render() {
        return <div>Now Loading....</div>
    }
}

class App extends Component {
    // state.article, state.list에 로딩중임을 나타내는 값 isLoading 추가(기본값 false)
    state = {
        article:{
            item:{title:'Welcom', desc:'Hello, React & Ajax'},
            isLoading:false
        },
        list:{
            items:[],
            isLoading:false
        }
    }
    // componentDidMount(): 컴포넌트가 애플리케이션에 탑재되어 살아나기 시작하는 시점에 호출, 컴포넌트를 초기화할 때 네트워크 통신을 하기에 최적의 메서드
    componentDidMount() {
        // Object.assign(target, ...sources) : 객체 복제 방법 중 하나(다른 변수에 객체담기) 
        // target: 목표 객체. 출처 객체의 속성을 복사해 반영한 후 반환할 객체
        // sources: 출처 객체. 목표 객체에 반영하고자하 하는 속성들을 갖고 있는 객체들
        var newList = Object.assign({}, this.state.list, {isLoading:true});
        this.setState({list:newList});
        // fetchAPI 첫 번째 인자: 가져오려고 하는 데이터 주소
        // 브라우저가 데이터를 가져오면 가져온 데이터를 어떻게 처리할 것인지 구현
        fetch('list.json')
         // then함수의 인자로 전달된 함수는 list.json에 대한 호출이 끝난 다음에 호출되도록 약속되어 있음
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            console.log(json);
            // result를 대상으로 json() 메서드 호출 시 브라우저가 list.json 파일의 데이터를 자바스크립트 객체로 변환 
            this.setState({list: {
                items:json,
                isLoading:false
            }});
        }.bind(this));
    }
    render() {
        var NavTag = null;
        if(this.state.list.isLoading) {
            NavTag = <NowLoading></NowLoading>
        } else {
            NavTag = <Nav list={this.state.list.items} onClick={function(id) {
                var newArticle = Object.assign({}, this.state.article, {isLoading:true});
                this.setState({article:newArticle});
                fetch(id+'.json')
                .then(function(result) {
                    return result.json();
                })
                .then(function(json) {
                    this.setState({
                        article: {
                            item:{
                                title:json.title,
                                desc:json.desc
                            },
                            isLoading:false
                            }       
                    })
                }.bind(this));
            }.bind(this)}></Nav>
        }

        var ArticleTag = null;
        if(this.state.article.isLoading) {
            ArticleTag = <NowLoading></NowLoading>
        } else {
            ArticleTag = <Article title={this.state.article.item.title} desc={this.state.article.item.desc}></Article>
        }
        return(
            <div className="App">
                <h1>WEB</h1>
                {NavTag}
                {ArticleTag}
            </div>
    
        );
    }
    
}

export default App;