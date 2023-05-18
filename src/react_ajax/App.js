import React, { Component } from 'react';

class Nav extends Component {
    // 자바스크립트 객체를 state에 저장
    // state의 내용을 <ul>부분에 춮력하는 코드 작성
    // state에 JOSN 데이터를 저장하고 state의 list값을 통해 목록 항목 생성
    // -> Ajax를 사용해서 가져온 데이터로 직접 렌더링에 영향을 주는 것이 아니라 그것을 state에 넘긴다음
    // render 메서드가 state의 변화에 영향을 받아 처리하도록 구현
    state = {
        list:[]
    }
    // componentDidMount(): 컴포넌트가 애플리케이션에 탑재되어 살아나기 시작하는 시점에 호출, 컴포넌트를 초기화할 때 네트워크 통신을 하기에 최적의 메서드
    componentDidMount() {
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
            this.setState({list:json});
        }.bind(this));
    }
    render() {
        // listTag 배열 생성
        var listTag = [];
        for(var i = 0; i<this.state.list.length; i++) {
            var li = this.state.list[i];
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


class App extends Component {
    state = {
        article:{title:'Welcom', desc:'Hello, React & Ajax'}
    }
    render() {
        return(
            <div className="App">
                <h1>WEB</h1>
                <Nav onClick={function(id) {
                    fetch(id+'.json')
                    .then(function(result) {
                        return result.json();
                    })
                    .then(function(json) {
                        this.setState({
                            article: {
                                title:json.title,
                                desc:json.desc
                            }
                        });
                    }.bind(this));
                }.bind(this)}></Nav>
                <Article title={this.state.article.title} desc={this.state.article.desc}></Article>
            </div>
    
        );
    }
    
}

export default App;