# linked-list

An implementation of the linked list data structure in JavaScript.

## Running tests
```bash
npm install
npm test
```
The tests are written with Mocha using Chai as an assertion library.

## License
[WTFPL](http://www.wtfpl.net/txt/copying/)

# API Reference
<a name="LinkedList"></a>

## LinkedList
**Kind**: global class  

* [LinkedList](#LinkedList)
    * [new LinkedList()](#new_LinkedList_new)
    * [.length()](#LinkedList+length) ⇒ <code>number</code>
    * [.add(index)](#LinkedList+add) ⇒ <code>void</code>
    * [.dump()](#LinkedList+dump) ⇒ <code>Array.&lt;\*&gt;</code>
    * [.get(index)](#LinkedList+get) ⇒ <code>Node</code>
    * [.removeAt(index)](#LinkedList+removeAt)
    * [.removeLast()](#LinkedList+removeLast)
    * [.removeFirst()](#LinkedList+removeFirst)

<a name="new_LinkedList_new"></a>

### new LinkedList()
A linked list data structure.

<a name="LinkedList+length"></a>

### linkedList.length() ⇒ <code>number</code>
Get the length of the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+add"></a>

### linkedList.add(index) ⇒ <code>void</code>
Add a value to the list at the specified index.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="LinkedList+dump"></a>

### linkedList.dump() ⇒ <code>Array.&lt;\*&gt;</code>
Returns an array containing the elements of the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+get"></a>

### linkedList.get(index) ⇒ <code>Node</code>
Get the value at the specified index.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="LinkedList+removeAt"></a>

### linkedList.removeAt(index)
Remove the value from the given index.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 

<a name="LinkedList+removeLast"></a>

### linkedList.removeLast()
Remove the last value from the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+removeFirst"></a>

### linkedList.removeFirst()
Remove the first value from the list.

**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  
