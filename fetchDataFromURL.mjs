#!/usr/bin/env zx


// it returns the weather report of your location

let resp = await fetch('http://wttr.in')
if (resp.ok) {
  console.log(await resp.text());
}