import styled from 'styled-components'
import TopImg from '@as/images/top.png'

export const ResultContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const ListForResult = styled.div`
    height: calc(100vh - 2.266667rem);
    width: 100%;
    overflow: hidden;
    .context { 
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
` 

export const TopForResult = styled.div`
    background-color: #fff;
    border-radius: 50%;
    width: 1.333333rem;
    height: 1.333333rem;
    background-image: ${ `url(${TopImg})` };
    position: fixed;
    bottom: 1.333333rem;
    right: .266667rem;
`