# React Skeleton Splash 🦄

![](https://img.shields.io/github/issues-raw/lhammarstrom/react-skeleton-splash.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

As a frontend developer I have always thought that my designs were missing something. Loading screens just didn't ever line up with how I pictured them in my mind. I tried everyhting, loading bars, spinners, inspirational messages with themed backgrounds but it still didn't seem right.

But one faithful day while I was reading articles on the intertubular speedway of information (the internet) I came across [this article about skeleton screen](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a) and boyo did it change how I saw and understood loading screens. Here's my favorite part

> *Skeleton screens (as splash screens), when used to indicate that a screen is loading, are perceived as being shorter in duration when compared against a blank screen (our control) and a spinner — but not by much*

Isn't that something? So I began incorporating them into my design and what do you know, things just started to line up. My designs felt more performant and best of all: no longer was there awkward margin- / padding-issues when a screen was finished loading!

Aaaand what do we say to that, well 🦄🦄🦄

But there was still one problem, I could not find a React-package that was not giving me unforeseen headaches. So I thought, *why not make my own?* So, with 38 lines of breathtaking code and the all powerful package [styled-components](https://github.com/styled-components/styled-components), I did

```
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

const Wave = styled.div`
    animation: ${fade} 2s ease-in-out infinite;
    background-color: ${props => props.baseColor};
    background-image: linear-gradient(
        90deg, 
        ${props => props.baseColor},
        ${props => props.shineColor},
        ${props => props.baseColor}
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
`;

export default function Skeleton({
    style = { height: '100%', width: '100%', borderRadius: 5 },
    baseColor = '#f4f4f4',
    shineColor = '#e5e5e5',
}) {
    return (
        <Wave
            style={style}
            baseColor={baseColor}
            shineColor={shineColor}
        />
    );
}
```

Then to prove its 🦄 I then wrote an implentation with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to see it working in action

```
import React from 'react';
import Loader from 'react-skeleton-splash';
import { holderStyle, getRandomItems, imageLoaderStyle, getRandomTextStyle } from './defaults';

export default function () {
    const items = getRandomItems();
    return (
        <div style={holderStyle}>
            <Loader style={imageLoaderStyle} />
            {items.map(id => (
                <Loader
                    key={`loading-item-${id}`}
                    style={getRandomTextStyle()}
                />
            ))}
        </div>
    );
}
```

I split the code up with the helpers in a different file so you could actually understand the index-component.

```
const widths = [
    '15%',
    '25%',
    '35%',
    '45%',
    '55%',
    '65%',
    '75%',
    '85%',
    '95%',
    '100%',
];

export const holderStyle = {
    width: '600px',
    margin: '0 auto',
};

const imageHeight = '70px';
export const imageLoaderStyle = {
    marginTop: '15px',
    height: imageHeight,
    width: imageHeight,
    borderRadius: imageHeight,
};

export const textLoaderStyle = {
    marginTop: '15px',
    height: '14px',
    borderRadius: '5px',
};

function getRandomWidth() {
    const index = Math.floor(Math.random() * widths.length);
    return widths[index];
}

export function getRandomTextStyle() {
    return { ...textLoaderStyle, width: getRandomWidth() };
}

export function getRandomItems() {
    const numberOfItems = Math.floor(Math.random() * 15) + 1;
    const items = [...Array(numberOfItems).keys()];

    return items;
}
```

So what can you do with this? Copy it, use it, show your boss, learn, anything!