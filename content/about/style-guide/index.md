+++
title = "Style Guide"
+++

This is a guide to the styles and patterns used throughout the site.
{.lead}

<!--more-->

## Title

The main page header of this guide is an `h1` element. Any header elements may include links.

## Sections

The secondary header above is an `h2` element, which may be used for any form of important page-level header. Consider using an `h2` unless you need a header level of less importance, or as a sub-header to an existing `h2` element.

### Third-level header

The header above is an `h3` element, which may be used for any form of page-level header which falls below the `h2` header in a document hierarchy.

#### Fourth-level header

The header above is an `h4` element, which may be used for any form of page-level header which falls below the `h3` header in a document hierarchy.

##### Fifth-level header

The header above is an `h5` element, which may be used for any form of page-level header which falls below the `h4` header in a document hierarchy.

###### Sixth-level header

The header above is an `h6` element, which may be used for any form of page-level header which falls below the `h5` header in a document hierarchy.

## Structural elements

### Paragraphs

All paragraphs are wrapped in `p` tags. Additionally, `p` elements can be wrapped with a `blockquote` element if the `p` element is indeed a quote.

### Blockquotes

The `blockquote` element represents a section that is being quoted from another source:

> Many forms of Government have been tried, and will be tried in this world of sin and woe. No one pretends that democracy is perfect or all-wise. Indeed, it has been said that democracy is the worst form of government except all those other forms that have been tried from time to time.
>
> --- Winston Churchill, in [a speech to the House of Commons](https://api.parliament.uk/historic-hansard/commons/1947/nov/11/parliament-bill#column_206) (11th November 1947)

### Horizontal rules

The `hr` element represents a paragraph-level thematic break, for example a scene change in a story, or a transition to another topic within a section of a reference book. The following extract from _Pandora's Star_ by Peter F. Hamilton shows two paragraphs that precede a scene change and the paragraph that follows it:

> Dudley was ninety-two, in his second life, and fast approaching time for another rejuvenation. Despite his body having the physical age of a standard fifty-year-old, the prospect of a long degrading campaign within academia was one he regarded with dread. For a supposedly advanced civilization, the Intersolar Commonwealth could be appallingly backward at times, not to mention cruel.
>
> _Maybe it won't be that bad_, he told himself. The lie was comforting enough to get him through the rest of the night's shift.
>
> ---
>
> The Carlton AllLander drove Dudley home just after dawn. Like the astronomer, the vehicle was old and worn, but perfectly capable of doing its job. It had a cheap diesel engine, common enough on a semi-frontier world like Gralmond, although its drive array was a thoroughly modern photoneural processor. With its high suspension and deep-tread tyres it could plough along the dirt track to the observatory in all weather and seasons, including the metre-deep snow of Gralmond's winters.

## List elements

### Ordered lists

The `ol` element denotes an ordered list. Each item requires a surrounding `li` tag, to denote individual items within the list.

Here is an example list showing the monarchs of Great Britain and the United Kingdom:

1. House of Stuart
   1. Anne
2. House of Hanover
   1. George I
   2. George II
   3. George III
   4. George IV
   5. William IV
   6. Victoria
3. House of Saxe-Coburg and Gotha
   1. Edward VII
4. House of Windsor
   1. George V
   2. Edward VIII
   3. George VI
   4. Elizabeth II

### Unordered lists

The `ul` element denotes an unordered list (i.e. a list of loose items that don't require numbering, or a bulleted list). Again, each item requires a surrounding `li` tag, to denote individual items.

Here is an example list showing the constituent parts of the British Isles:

- United Kingdom of Great Britain and Northern Ireland:
  - England
  - Scotland
  - Wales
  - Northern Ireland
- Republic of Ireland
- Isle of Man
- Channel Islands:
  - Bailiwick of Guernsey
  - Bailiwick of Jersey

Sometimes you may want each list item to contain block elements, typically a paragraph or two:

- The British Isles is an archipelago consisting of the two large islands of Great Britain and Ireland, and many smaller surrounding islands.

- Great Britain is the largest island of the archipelago. Ireland is the second largest island of the archipelago and lies directly to the west of Great Britain.

- The full list of islands in the British Isles includes over 1,000 islands, of which 51 have an area larger than 20 km<sup>2</sup>.

## Table elements

Tables should be used when displaying tabular data. The `thead`, `tfoot` and `tbody` elements enable you to group rows within each table.

If you use these elements, you must use every element. They should appear in this order: `thead`, `tfoot` and `tbody`, so that browsers can render the foot before receiving all the data. You must use these tags within the `table` element.

Example with Team GB's London 2012 medal table:

<div class="overflow-x-auto">
  <table>
    <thead>
      <tr>
        <th scope="col">Sport</th>
        <th scope="col">Gold</th>
        <th scope="col">Silver</th>
        <th scope="col">Bronze</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tfoot>
      <tr>
        <td>Total</td>
        <td>29</td>
        <td>17</td>
        <td>19</td>
        <td>65</td>
      </tr>
    </tfoot>
    <tbody>
      <tr>
        <td>Athletics</td>
        <td>4</td>
        <td>1</td>
        <td>1</td>
        <td>6</td>
      </tr>
      <tr>
        <td>Boxing</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Canoe Slalom</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Canoe Sprint</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Cycling — Road</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Cycling — Track</td>
        <td>7</td>
        <td>1</td>
        <td>1</td>
        <td>9</td>
      </tr>
      <tr>
        <td>Diving</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Equestrian</td>
        <td>3</td>
        <td>1</td>
        <td>1</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Gymnastics - Artistic</td>
        <td>0</td>
        <td>1</td>
        <td>3</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Hockey</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Judo</td>
        <td>0</td>
        <td>1</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Modern Pentathlon</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Rowing</td>
        <td>4</td>
        <td>2</td>
        <td>3</td>
        <td>9</td>
      </tr>
      <tr>
        <td>Sailing</td>
        <td>1</td>
        <td>4</td>
        <td>0</td>
        <td>5</td>
      </tr>
      <tr>
        <td>Shooting</td>
        <td>1</td>
        <td>0</td>
        <td>0</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Swimming</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Tennis</td>
        <td>1</td>
        <td>1</td>
        <td>0</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Taekwondo</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Triathlon</td>
        <td>1</td>
        <td>0</td>
        <td>1</td>
        <td>2</td>
      </tr>
    </tbody>
  </table>
</div>

## Media elements

### Image

The `img` element embeds an image into the document. The `src` attribute is required, and contains the path to the image you want to embed.
The `alt` attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Example:

![Example image](image-small@2x.png)

An image can also take up the whole column. Example:

{{< img
  src="image-large@2x.png"
  alt="Example image"
  caption="Concept art for breakup scene in [Coffee Run](https://studio.blender.org/films/coffee-run), by [Blender Studio](https://studio.blender.org/)."
>}}

### Video

The `video` element embeds a media player which supports video playback into the document. Example:

{{< video
  src="video.mp4"
  width="1910"
  height="800"
  alt="Example video"
  caption="Clip of cafe scene in [Coffee Run](https://studio.blender.org/films/coffee-run), by [Blender Studio](https://studio.blender.org/)."
>}}

### Inline frame

The `iframe` element represents a nested browsing context, embedding another HTML page into the current one. Examples:

{{< youtube id="dQw4w9WgXcQ" title="Some video from YouTube" >}}

{{< vimeo id="32001208" title="Some other video from Vimeo" >}}

## Text formatting elements

### Links and anchors

The `a` element is used to hyperlink text, be that to another page, a named fragment on the current page or any other location on the web. Example:

[Go to the home page](/) or [return to the top of this page](#main).

### Stressed emphasis

The `em` element is used to denote text with stressed emphasis. Where italicizing is required for stylistic differentiation, the `i` element may be preferable. Example:

You simply _must_ try the negitoro maki!

### Strong importance

The `strong` element is used to denote text with strong importance. Where bolding is used for stylistic differentiation, the `b` element may be preferable. Example:

**Don't** stick nails in the electrical outlet.

### Italicised

The `i` element is used for text in an alternate voice or mood, or otherwise offset from the normal prose. Examples include taxonomic designations, technical terms, idiomatic phrases from another language, the name of a ship or other spans of text whose typographic presentation is typically italicised. Example:

There is a certain <i>je ne sais quoi</i> in the air.

### Emboldened

The `b` element is used for text stylistically offset from normal prose without conveying extra importance, such as key words in a document abstract, product names in a review, or other spans of text whose typographic presentation is typically emboldened. Example:

You enter a small room. Your <b>sword</b> glows brighter. A **rat** scurries past the corner wall.

### Inline quotes

The `q` element is used for quoting text inline. Example showing nested quotations:

John said, <q>I saw Lucy at lunch, she told me <q>Mary wants you to get some ice cream on your way home</q>. I think I will get some at Ben and Jerry's, on Gloucester Road.</q>

### Abbreviations

The `abbr` element is used for any abbreviated text, whether it be acronym, initialism, or otherwise. Generally, it's less work and useful (enough) to mark up only the first occurrence of any particular abbreviation on a page, and ignore the rest. Any text in the `title` attribute will appear when the user's mouse hovers the abbreviation (although, notably, this does not work in Internet Explorer for Windows). Example:

Get the latest news from the [<abbr title="British Broadcasting Corporation">BBC</abbr>](https://www.bbc.co.uk/) in Stoke and <abbr title="Staffordshire">Staffs</abbr>.

### Definitions

The `dfn` element is used to highlight the first use of a term. The `title` attribute can be used to describe the term. Example:

Bob's <dfn title="Dog">canine</dfn> mother and <dfn title="Horse">equine</dfn> father sat him down and carefully explained that he was an <dfn title="A mutation that combines two or more sets of chromosomes from different species">allopolyploid</dfn> organism.

### Citations

The `cite` element is used to represent the title of a work (for example a book, essay, poem, song, film, TV show, sculpture, painting, musical, exhibition, etc.). This can be a work that is being quoted or referenced in detail, or it can just be a work that is mentioned in passing. Example:

<cite>Universal Declaration of Human Rights</cite>, United Nations, December 1948. Adopted by General Assembly resolution 217 A (III).

### Marked or highlighted text

The `mark` element is used to represent a run of text marked or highlighted for reference purposes. When used in a quotation it indicates a highlight not originally present but added to bring the reader's attention to that part of the text. When used in the main prose of a document, it indicates a part of the document that has been highlighted due to its relevance to the user's current activity. Example:

I also have some ==kitten==s who are visiting me these days. They're really cute. I think they like my garden! Maybe I should adopt a ==kitten==.

### Edits

The `del` element is used to represent deleted or retracted text which still must remain on the page for some reason. Meanwhile its counterpart, the `ins` element, is used to represent inserted text. Example:

As a result, ~~Kodos~~ ++Kang++ was elected president.

### Variables

The `var` element is used to denote a variable in a mathematical expression or programming context, but can also be used to indicate a placeholder where the contents should be replaced with your own value. Example:

If there are <var>n</var> pipes leading to the ice cream factory then I expect at _least_ <var>n</var> flavours of ice cream to be available for purchase!

### Superscript and subscript text

The `sup` element represents a superscript and the sub element represents a `sub`. These elements must be used only to mark up typographical conventions with specific meanings, not for typographical presentation. As a guide, only use these elements if their absence would change the meaning of the content. Example:

Chemical formulas are written using subscripts (for example C~6~H~12~O~6~), but atomic isotopes are written using superscripts (for example ^13^C, ^131^I, and ^238^U).

### Small print

The `small` element is used to represent disclaimers, caveats, legal restrictions, or copyrights (commonly referred to as 'small print'). It can also be used for attributions or satisfying licensing requirements. Example:

<small>Copyright (C) 1912-2012 Acme Corporation. All Rights Reserved.</small>

### Time

The `time` element is used to represent either a time on a 24-hour clock, or a precise date in the proleptic Gregorian calendar, optionally with a time and a time-zone offset. Example:

Queen Elizabeth II was proclaimed sovereign of each of the Commonwealth realms on <time datetime="1952-02-06">6</time> and <time datetime="1952-02-07">7 February 1952</time>, after the death of her father, King George VI.

### Details

The `details` HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the `summary` element.

<details open>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>

### Keyboard entry

The `kbd` element is used to denote user input (typically via a keyboard, although it may also be used to represent other input methods, such as voice commands). Example:

To take a screenshot on your Mac, press <kbd>⌘ Cmd</kbd> + <kbd>⇧ Shift</kbd> + <kbd>3</kbd>.

### Sample output

The `samp` element is used to represent (sample) output from a program or computing system. Useful for technology-oriented sites, not so useful otherwise. Example:

The computer said <samp>Too much cheese in tray two</samp> but I didn't know what that meant.

### Pre-formatted text

The `pre` element represents a block of pre-formatted text, in which structure is represented by typographic conventions rather than by elements. Here's an example showing the printable characters of ASCII:

      ! " # $ % & ' ( ) * + , - . /
    0 1 2 3 4 5 6 7 8 9 : ; < = > ?
    @ A B C D E F G H I J K L M N O
    P Q R S T U V W X Y Z [ \ ] ^ _
    ` a b c d e f g h i j k l m n o
    p q r s t u v w x y z { | } ~

### Code

The `code` element is used to represent fragments of computer code. Useful for technology-oriented sites, not so useful otherwise. Example:

The [`requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame) method in the `window` object tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint.

### Code blocks

The `code` element can also be used in conjunction with the `pre` element to represent verbatim text like markup or a fragment of computer code. Example:

```txt
function microsoftShuffle(arr) {
  return arr.slice().sort(function () {
    return (0.5 - Math.random());
  });
}
```

You may choose to display line numbers next to the code. Example:

```javascript {linenos=inline,hl_lines=[3]}
function microsoftShuffle(arr) {
  return arr.slice().sort(function () {
    return 0.5 - Math.random();
  });
}
```

You may also specify the language of a code block, so that it can be properly highlighted. Below you can find the classic _Hello World_ program implemented in different languages.

#### Bash

```bash
#!/bin/bash
echo "Hello, world!"
```

#### C

```c
#include <stdio.h>
int main(int argc, char *argv[]) {
  printf("Hello, world!\n");
  return 0;
}
```

#### C++

```cpp
#include <iostream>
using namespace std;
int main() {
  cout << "Hello, world!" << endl;
  return 0;
}
```

#### C&#35;

```csharp
using System;
class Program {
  public static void Main() {
    Console.WriteLine("Hello, world!");
  }
}
```

#### Clojure

```clojure
(println "Hello, world!")
```

#### CSS

```css
body::before {
  content: "Hello, world!";
}
```

#### Diff

```diff
diff --git a/foo.txt b/foo.txt
index c62237e..af5626b 100644
--- a/foo.txt
+++ b/foo.txt
@@ -1 +1 @@
-Goodbye, world!
+Hello, world!
```

#### Elixir

```elixir
IO.puts "Hello, world!"
```

#### Elm

```elm
import Text
main = Text.plainText "Hello, world!"
```

#### Erlang

```erlang
io:format("~s~n", ["Hello, world!"])
```

#### F&#35;

```fsharp
printf "Hello, world!\n"
```

#### Go

```go
package main
import "fmt"
func main() {
  fmt.Println("Hello, world!")
}
```

#### Haskell

```haskell
main = putStrLn "Hello, world!"
```

#### HTML

```html
<html>
  <body>
    Hello, world!
  </body>
</html>
```

#### Java

```java
public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello, world!");
  }
}
```

#### JavaScript

```javascript
console.log("Hello, world!");
```

#### Julia

```julia
println("Hello, world!")
```

#### Kotlin

```kotlin
fun main(args : Array<String>) {
  println("Hello, world!")
}
```

#### Lisp

```lisp
(princ "Hello, world!")
```

#### Lua

```lua
print("Hello, world!")
```

#### Objective-C

```objectivec
#import <stdio.h>
int main(void) {
  printf("Hello, world!\n");
  return 0;
}
```

#### Perl

```perl
print "Hello, world!";
```

#### PHP

```php
<?= 'Hello, world!' ?>
```

#### Python

```python
print "Hello, world!"
```

#### R

```r
cat('Hello, world!')
```

#### Ruby

```ruby
puts "Hello, world!"
```

#### Rust

```rust
fn main() {
  println!("Hello, world!");
}
```

#### Scala

```scala
object HelloWorld extends App {
  println("Hello, world!")
}
```

#### Scheme

```scheme
(display "Hello, world!")
```

#### Shell

```sh
echo 'Hello, world!'
```

#### Smalltalk

```smalltalk
Transcript show: 'Hello, world!'.
```

#### Swift

```swift
println("Hello, world!")
```

#### TypeScript

```typescript
console.log("Hello, world!");
```

### Admonitions

You can use admonitions to call attention to information. Example:

{{< note >}}
**Note**

All VPC networks include firewall rules.
{{< /note >}}

{{< caution >}}
**Caution**

After you delete a bucket, you can't recover archived object versions.
{{< /caution >}}

{{< danger >}}
**Danger**

Do not manually edit or delete generated table entries.
{{< /danger >}}

## Error pages

There's a [404]({{< ref 404 >}}) page, but hopefully you'll never see it.
