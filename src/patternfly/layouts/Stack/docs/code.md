## Overview

A stack layout is a layout that positions its items vertically. In a stack layout there is one primary item that will expand vertically to fill the container if needed.

## Usage

| Class | Applied to | Outcome |
| -- | -- | -- |
| `.pf-l-stack` | `<div>`, `<section>`, or `<article>` | Initiates the stack layout. |
| `.pf-l-stack__item` | `<div>` | Initiates a stack item. **Required**  |
| `.pf-m-gutter` | `.pf-l-stack` | Adds space between children by using the globally defined gutter value. |
| `.pf-m-fill` | `.pf-l-stack__item` | Specifies which item(s) should fill the avaiable vertical space. |
