from ast import keyword
from inspect import getsource
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
#import pandas as pd 
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.service import Service
from geopy.geocoders import Nominatim
from re import sub,compile
from webdriver_manager.firefox import GeckoDriverManager


class LocalNews():
    def __init__(self,address,keywords): 
        
        options = webdriver.FirefoxOptions()
        options.add_argument("--headless")
        self.driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()), options=options)
        # self.driver = webdriver.Firefox(
        #     executable_path=self.config["selenium"], options=options
        # )
        self.address=address
        #self.driver = webdriver.Firefox()
        self.headlines=[]
        self.keywords=keywords
        self.sites=["miamiherald.com","local10.com", "wsvn.com", "nbcmiami.com"]

    def get_city(self):
        geolocator = Nominatim(user_agent="test")
        location = geolocator.geocode(self.address)
        address=geolocator.reverse(str(location.latitude)+","+str(location.longitude))
        address=address.raw['address']
        city = address['city']
        state = address['state']
        country = address['country']

        return city+", "+state+", "+country

    def get_sources(self):
        loc=self.get_city()
        self.driver.get("https://www.google.com/search?q=local news "+loc+"&biw=1536&bih=754&sxsrf=APq-WBtgW9PH8OP4IvAqZQ2R6emPNOTwUw%3A1646428552703&ei=iIEiYsazKoCZwbkPq5aamAY&ved=0ahUKEwjGl6CosK32AhWATDABHSuLBmMQ4dUDCA8&uact=5&oq=local+news+miami%2C+fl&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIICAAQFhAKEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46BwgjELADECc6BwgAEEcQsAM6CggAEEcQsAMQyQM6CAgAEJIDELADOggIABCABBCxAzoFCAAQkQI6CAgAELEDEIMBOgsIABCABBCxAxCDAUoECEEYAEoECEYYAFDUA1iqNWCwOGgDcAF4AIAB6AGIAcwGkgEFOC4wLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz")
        reurl = compile(r"https?://(www\.)?") #regex object not to be confused with string
        sites = [reurl.sub('', i.get_attribute("href")).strip().strip('/')  for i in self.driver.find_elements(By.XPATH,r'//*[@class="yuRUbf"]/a')]
        #self.driver.close()
        return sites
        #df = pd.DataFrame(data=d)
        #df.to_csv("local_sources.csv")
        


    def news_search(self):
        sites=["site:"+i for i in self.get_sources()]
        site_string=" | ".join(sites)
        #from apnews and past 24 hours of news
        self.driver.get("https://www.google.com/search?q="+self.keywords+" "+site_string+"&biw=1536&bih=754&tbm=nws&sxsrf=APq-WBsjnWpRzldcyHY68m51UBphJhs3XQ%3A1646814964964&ei=9GYoYrCwOqK0qtsPkdSD8AQ&ved=0ahUKEwiw-vznz7j2AhUimmoFHRHqAE4Q4dUDCA0&uact=5&oq=site%3Amiamiherald.com+%7C+site%3Alocal10.com+%7C+site%3Awsvn.com+%7C+site%3Anbcmiami.com&gs_lcp=Cgxnd3Mtd2l6LW5ld3MQA1C2GVi2GWCDHGgAcAB4AIABjQGIAbkCkgEDMi4xmAEAoAEBwAEB&sclient=gws-wiz-news")

        Tabs=True
        i=1
        while (Tabs):
            try:
                elem = self.driver.find_element_by_xpath('//*[@id="rso"]/div['+str(i)+']/g-card/div/div/a/div/div/div[2]')
                print(elem.text)
                self.headlines.append(elem.text)
                i+=1
            except:
                print("no more headlines")
                Tabs=False
        print("Headlines:\n")
        print(self.headlines)
        return self.headlines
        #df=pd.DataFrame(self.headlines,columns=["Headline"])
        #df.to_csv("out.csv")
        assert "No results found." not in self.driver.page_source
        self.driver.close()

#ls=LocalNews(address="750 NW 43rd Ave Miami, FL 33126", keywords="covid")
#ls.news_search()
#print(ls.get_city())
#print(ls.get_sources())
