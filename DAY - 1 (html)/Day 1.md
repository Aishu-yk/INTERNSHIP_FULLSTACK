# What is internet 
### ✅ **1. What Is the Internet?**

**Definition:**  

**The internet is a global network of computers that are connected and can communicate with each other.**

**Key Points  :**

- Computers, smartphones, and servers are all "nodes" on the internet.
    
- These devices communicate using a common set of rules (called **protocols**).
    
- The World Wide Web (WWW) is just one part of the internet — it uses web browsers, websites, and HTML.

---

### ✅ **2. What Is a Protocol?**

**Definition**:  
A **protocol** is a set of rules that allows devices to communicate over the internet.

**Examples of Internet Protocols:**

- **IP (Internet Protocol)** – assigns addresses to devices.
    
- **TCP (Transmission Control Protocol)** – ensures reliable communication between computers.
    
- **HTTP (HyperText Transfer Protocol)** – the foundation of web communication.


You can say:  
_"Protocols are like languages that computers agree to speak so they can share data reliably."_

---

### ✅ **3. HTTP – The Language of the Web**

**Definition**:  
**HTTP (HyperText Transfer Protocol)** is the protocol web browsers use to request and display web pages.

**How it works:**

- When you type a website URL (like `https://example.com`) into your browser:
    
    1. The browser sends an **HTTP request** to the server.
        
    2. The server sends back an **HTTP response** that includes HTML content.
        
    3. The browser displays the web page.


**Bonus: HTTPS**

- **HTTPS** is the secure version of HTTP, using encryption (SSL/TLS) to keep data safe.


---

### ✅ **4. What Is an Internet Package or Data Packet?**

**Definition**:  
When data travels over the internet, it's broken into small chunks called **packets**.

**Key Points:**

- Each packet contains part of the data, plus the destination address.
    
- Packets can travel different routes and are reassembled at the destination.


**Analogy**:  
_"It's like sending a letter in multiple envelopes. Each envelope holds a piece of the letter, and they all arrive at the same house to be put together."_


# Who pays DNS providers ? Is DNS service free ?


![[Pasted image 20250526211517.png]]
Whenever we access a website in the World Wide Web, we are implicitly making queries to many _DNS_ servers in order to know the _IP address_ of the server hosting that website.

# Actors involved in a DNS query

When we enter a URL like [_www.medium.com_](http://www.medium.com/) in the browser, only the communication between us and the website is apparently going on:

![](https://miro.medium.com/v2/resize:fit:333/1*7maq7Owfj5T27FeZBqqavw.png)

Behind the scenes, our computer made a DNS query to another server (usually called DNS resolver or DNS recursive resolver) which itself made several queries to different servers. This is depicted in the following figure.

![](https://miro.medium.com/v2/resize:fit:674/1*DMBi5HfrzeGtdJfoJHhafQ.png)

## What are these servers and who owns them ?

The **DNS resolver** is provided by our Internet Service Provider. Our computer knows its IP address from the moment it starts (for more information see [DHCP protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol)). This DNS resolver has a list of **root name servers** and their IP addresses in its software.

The **root name servers** are the most important servers in the DNS system. They resolve the top level domain of the website (In our example of [www.medium.com](http://www.medium.com/), a root server gives the name server to contact for _.com_ domain). There are 13 root name servers in the Internet. In the beginning, these were 13 servers exactly, but today they are 13 _clusters_ of servers, each cluster is distributed in different locations around the world. They are operated by different organizations. [_ICANN_](https://www.icann.org/) maintains one of these name servers.

Then, we have **Top Level Domain servers** (or TLD servers). Each TLD server manages one or several website extensions (.com, .org, .net, .us, .fr, …). For example, the .com TLD server gives the server to contact to resolve subdomains of medium.com domain. _ICANN_ has the authority over most Top Level Domains and delegates their management to other organizations (such us [Verisign](https://www.verisign.com/) which maintains .com domain)

Finally, the **authoritative name server** for the domain medium.com is the server which knows the IP address associated with [www.medium.com](http://www.medium.com./) and the other subdomains like (ayoubomari.medium.com). It therefore gives the answer the DNS resolver was looking for, which then gives it to our computer. When we register a domain name (in websites like [GoDaddy](https://www.godaddy.com/), [Bluehost](https://www.bluehost.com/), ...), these registrars maintain the authoritative name server for our website.

Now comes the important question: **What these organizations get from answering billions of DNS requests every day** **?** **Who pays them ?**

## For Authoritative name servers

As mentioned above, these servers are maintained by the domain registrar. The domain registrar gets paid when the website owner registers for that domain and charges them a fee every year.

## For TLD servers

When the website owner pays the registrar for getting his website domain name, this registrar _pays a fee_ to a **domain name registry** which maintains TLD servers.

## For Root servers

Apart from ICANN which gets a part of the money the registry gets from a registrar, the other root servers are not paid for that. Here is a quote from [Netnod](https://www.netnod.se/) which operates one of the 13 root servers:

> What does Netnod get out of being a root server operator?  
> **A warm glow**… Like all the other root server operators, Netnod spends money to operate a root server (all operators have their own funding models). Of course, we’ve also built up a lot of unique expertise, which deeply informs our other services. But really, like all the other operators, we do this because we believe it is for the good of the Internet

## For DNS resolver

The Internet Service Provider which maintains this server gets paid for our internet access, so it is paid for the bandwidth we use to contact the DNS resolver.

# The Difference Between Front-end and Back-end Meanings

![[Pasted image 20250526211430.png]]


### java script calculator is best example of how flow workes

### [JavaScript Cal ](https://codepen.io/giana/pen/GJMBEv)


# IDE vs Code Editor

![[Pasted image 20250527142544.png]]

![[Pasted image 20250527142634.png]]

# what is markup language

### What is a Markup Language?

A **markup language** is a way to **add information to text** to describe how it should be **structured**, **formatted**, or **displayed**.

![[Pasted image 20250527143515.png]]

# Example of markup languages

![[Pasted image 20250527143712.png]]



# What is Html

**HTML** stands for **HyperText Markup Language**.  
It is the **standard language used to create and structure content on the web**.

## structure of html

### Element in html

![[Pasted image 20250527143914.png]]

## HTML Boilerplate

A boilerplate in HTML is a template you will add at the start of your project. You should add this boilerplate to all of your HTML pages.


## Document structure

```
<!DOCTYPE html>

<html lang="en-US">

  <head>  </head>
  
  <body>  </body>

	<!-- This is an comment-->

</html>
```

# Tags
### Head tag 
```
<h1></h1>
```

### Paragraph tag
```
<p> </p>
```
### Void Element
```
<hr><br><hr /><br />
```
### List
###  **Unordered List (`<ul>`)**

- Displays items **without any specific order**
    
- Uses **bullets** (●, ○, etc.) by default
    
- Common for listing items where order doesn’t matter (e.g., shopping lists, features)
    

#### Example:

html

CopyEdit

```
<ul>   
	<li>Apples</li>   
	<li>Bananas</li>   
	<li>Cherries</li> 
</ul>
```

**Result:**

- Apples
    
- Bananas
    
- Cherries
    

---

###  **Ordered List (`<ol>`)**

- Displays items in a **specific order**
    
- Uses **numbers** (1, 2, 3...) by default
    
- Useful for instructions, rankings, steps, etc.
    

#### Example:

html

CopyEdit

```
<ol>   
	<li>Preheat the oven</li>   
	<li>Mix the ingredients</li>   
	<li>Bake for 30 minutes</li> 
</ol>
```

**Result:**

1. Preheat the oven
    
2. Mix the ingredients
    
3. Bake for 30 minutes
    

### Summary

| Feature        | `<ul>` (Unordered List) | `<ol>` (Ordered List)  |     |
| -------------- | ----------------------- | ---------------------- | --- |
| Bullet Style   | Dots or custom styles   | Numbers/letters/roman  |     |
| Order Matters? | No                      | Yes                    |     |
| Use Case       | General lists, menus    | Instructions, rankings |     |
### Nested list
Example: **Ordered list inside an unordered list**

```
<ul>
  <li>Fruits
    <ol>
      <li>Apple</li>
      <li>Banana</li>
      <li>Mango</li>
    </ol>
  </li>
  <li>Vegetables</li>
</ul>

```
**Result:**

- Fruits
    
    1. Apple
        
    2. Banana
        
    3. Mango
        
- Vegetables

Example: **Unordered list inside an ordered list**

```
<ol>
  <li>Shopping List
    <ul>
      <li>Milk</li>
      <li>Eggs</li>
      <li>Bread</li>
    </ul>
  </li>
  <li>Checkout</li>
</ol>

```
**Result:**

1. Shopping List
    
    - Milk
        
    - Eggs
        
    - Bread
        
2. Checkout



### Another tag

#### 1. **Link to another website**



`<a href="https://www.google.com">Go to Google</a>`

#### 2. **Link to another page in your website**



`<a href="about.html">About Us</a>`

#### 3. **Link to a section on the same page (anchor link)**


```
<!-- Navigation link --> 

<a href="#contact">Contact Us</a>  

<!-- Target section later on the same page -->

<h2 id="contact">Contact Information</h2>

```

#### 4. **Open link in a new tab**
> `<a href="https://example.com" target="_blank">Visit Example</a>`
#### 5. **Link to an email address**
> `<a href="mailto:info@example.com">Email Us</a>`



### Image
```
<img src="image_url" alt="description">
```

| Attribute | Purpose                                                                                            |
| --------- | -------------------------------------------------------------------------------------------------- |
| `src`     | **Source** of the image (URL or file path)                                                         |
| `alt`     | **Alternative text** shown if the image can't load (also used by screen readers for accessibility) |
|           |                                                                                                    |
 Optional Common Attributes

| Attribute | Description                            |
| --------- | -------------------------------------- |
| `width`   | Sets image width (in pixels or %)      |
| `height`  | Sets image height                      |
| `title`   | Tooltip text on hover                  |
| `loading` | Lazy-loads the image (`lazy`, `eager`) |
|           |                                        |
|           |                                        |
```
<img src="dog.jpg" alt="A happy dog" width="300" title="This is a dog">
```

External Image Example 
```
<img src="https://example.com/logo.png" alt="Company Logo">
```
## Essential tags

Here’s a single list of **essential HTML tags** with a **brief description of what each does**:
```

<!DOCTYPE html>   - Declares the HTML version (HTML5).
<html>            - Root element of an HTML document.
<head>            - Contains metadata (not shown on the page).
<title>           - Sets the title in the browser tab.
<body>            - Contains all visible page content.

<h1> to <h6>      - Headings, <h1> is the largest, <h6> the smallest.
<p>               - Paragraph of text.
<br>              - Line break (no closing tag).
<hr>              - Horizontal line (divider).

<strong>          - Bold text (semantic emphasis).
<em>              - Italic text (semantic emphasis).
<span>           - Inline container for styling or grouping.

<a>               - Hyperlink to another page or location.
<img>             - Displays an image.
<ul>              - Unordered (bulleted) list.
<ol>              - Ordered (numbered) list.
<li>              - List item (used in <ul> or <ol>).

<div>             - Block-level container for content or layout.
<section>         - Defines a section of content.
<article>         - Defines independent, self-contained content.
<header>          - Intro or navigation section of a page or section.
<footer>          - Footer section, usually for contact/info/links.
<nav>             - Container for navigation links.

<form>            - Creates a form for user input.
<input>           - Input field inside a form.
<textarea>        - Multi-line text input field.
<button>          - Clickable button.
<select>          - Drop-down list.
<label>           - Label for form inputs.

HTML Formatting Elements

Formatting elements were designed to display special types of text:

- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>` - Subscript text
- `<sup>` - Superscript text

---
```
