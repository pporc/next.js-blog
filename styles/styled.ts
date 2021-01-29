import styled from 'styled-components'

export const TextArea = styled.textarea`
    appearance: none;
    display: block;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: inherit;
    background: transparent;
    outline: none;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    width: 100%;
    height: 100px;
    padding: 10px 12px;
    margin-bottom: 18px;
    letter-spacing: 0.2px;
    box-shadow: 0px 2px 4px 0px rgb(0 0 0 / 7%),
        0px 1px 1.5px 0px rgb(0 0 0 / 5%);
    transition: border-color 0.25s ease-in-out;

    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: text;
    font: 400 13.3333px Arial;
    border-width: 2px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`

export const Input = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    box-sizing: border-box;
    font-size: 1.5rem;
    color: inherit;
    background: transparent;
    outline: none;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    width: 100%;
    height: 40px;
    padding: 0 12px;
    margin-bottom: 18px;
    letter-spacing: 0.2px;
    box-shadow: 0px 2px 4px 0px #00000012, 0px 1px 1.5px 0px #00000012;
    transition: border-color 0.25s ease-in-out;
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: text;
    margin-bottom: 1em;
    font: 400 13.3333px Arial;
`

export const Button = styled.a`
    background-color: transparent;
    box-shadow: inset 0 0 0 2px #212931;
    color: #212931 !important;
    appearance: none;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
        color 0.2s ease-in-out;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    display: inline-block;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.075em;
    height: 3rem;
    line-height: 3rem;
    padding: 0 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;

    &:hover {
        box-shadow: inset 0 0 0 2px #18bfef;
        color: #18bfef !important;
        transition: background-color 0.2s ease-in-out,
            box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
    }
`
