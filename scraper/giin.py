from urllib.request import urlopen
from bs4 import BeautifulSoup
import re
from urllib.parse import urljoin
import os

def shugiin():
  url = "http://www.shugiin.go.jp/internet/itdb_annai.nsf/html/statics/syu/1giin.htm"
  x = urlopen(url).read()
  soup = BeautifulSoup(x)
  links = soup.find_all("a")
  links = filter(lambda l: l.get("href").find("/profile/") > 0, links)
  
  g = open("public_images/figlist.csv", "w")
  for l in links:
    name = l.text
    u = urljoin(url, l.get("href"))
    print(name, u)
    a = os.path.basename(u)
    jpgfile = a.replace("html", "jpg")
    y = urlopen(urljoin(u, jpgfile + "/$File/" + jpgfile)).read()
    with open("public_images/" + jpgfile, "wb") as f:
      f.write(y)
    g.write(name + "," + jpgfile + "\n")
  g.close()


def sangiin():
  url = "http://www.sangiin.go.jp/japanese/joho1/kousei/giin/186/giin.htm"
  x = urlopen(url).read()
  soup = BeautifulSoup(x)
  links = soup.find_all("a")
  links = filter(lambda l: l.has_attr("href"), links)
  links = filter(lambda l: l.get("href").find("/profile/") > 0, links)
  
  g = open("san-images/figlist.csv", "w")
  for l in links:
    name = l.text
    u = urljoin(url, l.get("href"))
    print(name, u)
    a = os.path.basename(u)
    jpgfile = "g" + a.replace("htm", "jpg")
    y = urlopen(urljoin(u, "../photo/" + jpgfile)).read()
    with open("san-images/" + jpgfile, "wb") as f:
      f.write(y)
    g.write(name + "," + jpgfile + "\n")
  g.close()


# uncomment to download.
#shugiin()
#sangiin()