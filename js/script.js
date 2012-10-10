$(function() {
	
	// global variables
	var width = 600;
	var height = 400;
	var margin = {"left": 25, "bottom": 25, "right": 5}
	
	// x scale
	var xScale = d3.scale.linear()
		.domain([0, 100])
		.range([0, width - margin.left - margin.right])
		
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.ticks(0)
		.orient("bottom");
		
	// y scale
	var yScale = d3.scale.linear()
		.domain([0, 100])
		.range([height - margin.bottom, 0])
		
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.ticks(0)
		.orient("left");
		
	// creating the main svg
	var svg = d3.select("#canvas")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "svg")
	
	// axis and axis description
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(15," + (height - 15) + ")")
		.call(xAxis);
		
	var xLabel = svg.append("text")
		.attr("x", 100)
		.attr("y", 398)
		.attr("class", "axis wcm-label")
		.text("completeness of vision")
	
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(15, 10)")
		.call(yAxis);
		
	var yLabel = svg.append("text")
		.attr("x", 10)
		.attr("y", 325)
		.attr("class", "axis wcm-label")
		.text("ability to execute")
		.attr("transform", "rotate(270 10,325)")
		
	// wcm quadrant
	var quadrant_group = svg.append("g")
		.attr("transform", "translate(" + margin.left + ",0)")
	
	var quadrant_border = quadrant_group.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", width - margin.left - margin.right)
		.attr("height", height - margin.bottom)
		.attr("rx", 20)
		.attr("ry", 20)
		.attr("class", "quadrant_border")
	
	// creating quadrant descriptions
	quadrant_group.append("text")
		.attr("x", xScale(25))
		.attr("y", yScale(25))
		.attr("text-anchor", "middle")
		.text("Niche Players")
		.attr("class", "quad-label")
		
	quadrant_group.append("text")
		.attr("x", xScale(25))
		.attr("y", yScale(75))
		.attr("text-anchor", "middle")
		.text("Challengers")
		.attr("class", "quad-label")
	
	quadrant_group.append("text")
		.attr("x", xScale(75))
		.attr("y", yScale(25))
		.attr("text-anchor", "middle")
		.text("Visionaries")
		.attr("class", "quad-label")
		
	quadrant_group.append("text")
		.attr("x", xScale(75))
		.attr("y", yScale(75))
		.attr("text-anchor", "middle")
		.text("Leaders")
		.attr("class", "quad-label")
		
	// creating the dividers
	quadrant_group.append("line")
		.attr("x1", 0)
		.attr("y1", yScale(50))
		.attr("x2", xScale(100))
		.attr("y2", yScale(50))
		.attr("class", "divider");
		
	quadrant_group.append("line")
		.attr("x1", xScale(50))
		.attr("y1", 0)
		.attr("x2", xScale(50))
		.attr("y2", yScale(0))
		.attr("class", "divider");
		
	// data for each wcm
	var data = [
		{
			"company": "IBM",
			"cov": 45,
			"ate": 58,
			"label_x": -2,
			"label_y": +2,
			"text_anchor": "end",
			"description": "With <a href='http://www-01.ibm.com/software/lotus/products/webcontentmanagement/'>Web Content Manager 8.0</a> IBM seeks to increase its influence with, and appeal to, marketing executives and other influential business roles. Though IBM continues to offer Web Content Manager as a stand-alone product, its <a href='http://www-01.ibm.com/software/info/customerexperience/'>Customer Experience Suite</a> combines WCM with portal, e-commerce, analytics, application integration and other capabilities, including <a href='http://www-01.ibm.com/software/data/content-management/filenet-content-manager/'>FileNet Content Manager</a>.",
			"link": "http://www.ibm.com/",
			"flag": "us",
			"language": "java",
			"languageLong": "Java",
			"product": "Web Content Manager",
			"logo": "ibm.jpg",
			"strengths": [
				"WebSphere Portal enables integration with applications and data sources",
				"WebSphere Portal integration allows enterprises to use a personalization engine, shared authentication and an authorization repository for both content and applications",
				"Large and active customer base",
				"Growth potential thanks to its building with WebSphere Portal and IBM’s large ecosystem",
				"Acquisitions (search, customer experience analytics, etc.) will enable IBM to make progress toward providing multiple solution components"
			],
			"cautions": [
				"Struggle to create both a seamless experience for business users and a cohesive, easy-to-deploy platform for IT organizations",
				"Needs to be more aggressive in product development, particularly with regard to usability",
				"Combination of Web Content Manager and WebSphere Portal might be burdensome and expensive",
				"Price, lack of inherent functionality and heavy involvement of a system integrator or professional services team",
				"Difficulty of hiring knowledgeable resources"
			]
		},
		{
			"company": "Microsoft",
			"cov": 40,
			"ate": 54,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "There is huge interest in the WCM capabilities of <a href='http://sharepoint.microsoft.com'>SharePoint 2010</a> and its predecessor, since although this widely adopted product is used most often to support internal content management and collaboration, some Microsoft customers and partners also use it for customer- and partner-facing websites. A beta version of <a href='http://sharepoint.microsoft.com/en-us/preview/sharepoint.aspx'>SharePoint 2013</a> was released in July 2012.",
			"link": "http://www.microsoft.com/",
			"flag": "us",
			"language": "net",
			"languageLong": ".NET",
			"product": "Sharepoint",
			"logo": "microsoft.png",
			"strengths": [
				"SharePoint has become an important part of the content management of many enterprises",
				"Only small percentage uses SharePoint for external Web presence",
				"Based on ASP.NET and amount of features (CM, search, portal, collaboration, social computing, business intelligence) appeals to companies",
				"Expansive ecosystem of partners offering a wide range of services"
			],
			"cautions": [
				"Lacks refinements geared to important business scenarios and influences",
				"Largely geared to internal scenarios",
				"Less suited to the needs of organizations wanting to expand a digital marketing strategy",
				"In externally facing situations, enterprises pay a high price",
				"The substantial license costs make Microsoft an expensive option",
				"Capabilities are not well matched with third-party portals and e-commerce platforms"
			]
		},
		{
			"company": "Atex",
			"cov": 30,
			"ate": 40,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "Atex, which has its headquarters in Reading, U.K., has a long history in the newspaper, magazine, broadcast media and publishing sectors, particularly concerning editorial content management, advertising, subscriptions and support for digital strategies. Its acquisition of the Swedish company Polopoly in 2008 enabled it to enter the WCM market. <a href='http://www.atex.com/solutions/web-cms'>Atex Polopoly</a> is a Java-based offering, the most recent version of which, 10.4, was released in January 2012.",
			"link": "http://www.atex.com/",
			"flag": "gb",
			"language": "java",
			"languageLong": "Java",
			"product": "Atex Polopoly",
			"logo": "atex.png",
			"strengths": [
				"Excellent understanding of the media industry and a very long history in this area",
				"Reputation for stability and longevity",
				"Trusted advisor to its clients",
				"Transparent and open for clients’ issues"
			],
			"cautions": [
				"Needs to be more aggressive in its horizontal expansion",
				"Must nurture and embrace opportunities outside its current comfort zone",
				"Needs to improve interoperability outside its own portfolio",
				"Usability lags behind offerings of the Leaders",
				"Needs to put higher-level capabilities in the hands of non-IT users"
			]
		},
		{
			"company": "eZ Systems",
			"cov": 47,
			"ate": 38,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "eZ Systems, a Norwegian company, offers a WCM platform both on a commercial open-source basis and as SaaS. Its flagship product, <a href='http://ez.no/Products/eZ-Publish-Enterprise'>eZ Publish</a>, now in version 4.7, is based on the Linux, Apache, MySQL, PHP (LAMP) stack. Version 5 is scheduled for release in November 2012. In August 2011, eZ Systems added recommendation and personalization capabilities to its portfolio with the acquisition of German firm Yoochoose and, in October 2011, Web analytics with the acquisition of odoscope. Both acquisitions are now fully integrated as part of eZ Systems' strategy of building a platform in which WCM is the kernel.",
			"link": "http://ez.no/",
			"flag": "no",
			"language": "php",
			"product": "eZ Publish",
			"logo": "ezsystems.png",
			"languageLong": "PHP",
			"strengths": [
				"Has both a top-down and a bottom-up understanding about the WCM market for enterprises",
				"Is more forward-thinking in terms of its overall strategy, rather than adopt the “wait and see” approach",
				"Open-Source model enables customers to save on license fees",
				"Has a complete portfolio for ‘full life cycle management of digital presences’",
				"High degree of interoperability through REST interfaces",
				"Platform can be used as a fully managed cloud-based solution",
				"eZ Market provides an attractive additional business model"
			],
			"cautions": [
				"Strong publishing orientation won’t appeal to every organization",
				"Focus may not be obvious to firms in industries other than publishing",
				"Needs to expand its marketing activities in order to emphasize its message",
				"Still unknown outside the publishing and telecom industries",
				"Overall set of capabilities is modest in comparison with other vendors",
				"Needs to invest in product development"
			]
		},
		{
			"company": "Limelight Networks",
			"cov": 48,
			"ate": 33,
			"label_x": -2,
			"label_y": -1,
			"text_anchor": "end",
			"link": "http://www.limelight.com/",
			"description": "Limelight Networks, which is headquartered in Tempe, Arizona, entered the WCM market through its May 2011 acquisition of Clickability, a provider of a SaaS-based WCM offering. It markets this offering as the <a href='http://www.limelight.com/web-content-management/'>Limelight Dynamic Site Platform</a>. Limelight's product portfolio also covers small-object delivery, video content management, website and application acceleration, mobile delivery and monetization, electronic software downloads, and live and on-demand media delivery.",
			"flag": "us",
			"language": "java",
			"languageLong": "Java",
			"logo": "limelightnetworks.jpg",
			"product": "Limelight Dynamic Site Platform",
			"strengths": [
				"Good combination of WCM with video and content delivery network capabilities",
				"Only vendor to offer both WCM and online video natively",
				"One of the few ‘pure SaaS’ vendors",
				"Capabilities to be even more appealing to organizations developing a digital marketing strategy"
			],
			"cautions": [
				"Will need to sustain growth and improve its profitability",
				"Must communicate its message of orchestration more effectively to the market",
				"Decreasing trend regarding appearance on shortlists",
				"Needs to revise its go-to-market strategy",
				"A repositioning is crucial if it is to capitalize on the growing acceptance of SaaS-based WCM offerings"
			]
		},
		{
			"company": "e-Spirit",
			"cov": 32,
			"ate": 28,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"link": "http://www.e-spirit.com/",
			"description": "e-Spirit is wholly owned by adesso and based in Dortmund, Germany. Its flagship product, <a href='http://www.e-spirit.com/en/product/advantage/advantages.html'>FirstSpirit CMS</a>, is a Java-based WCM offering currently in its fourth major release (4.2 R4), with version 5 scheduled for release later in 2012.",
			"flag": "de",
			"language": "java",
			"languageLong": "Java",
			"logo": "espirit.gif",
			"product": "FirstSpirit",
			"strengths": [
				"Good track record of working in conjunction with other Web foundations",
				"Attractive for customers looking for WCM to complement an established portal",
				"Has done well as an emerging player in a market where demand for best-of-breed enterprise-class Java WCM has been growing",
				"With the introduction of AppCenter, e-Spirit has increased the usability of its product"
			],
			"cautions": [
				"Focuses too much on technology in a market where the decision makers are outside IT organizations",
				"Needs to be more aggressive and incisive about differentiating itself in a market where its competitors have far larger marketing budgets",
				"e-Spirit has yet to establish a significant footprint in North America",
				"Needs to broaden the value proposition for its social capabilities"
			]
		},
		{
			"company": "Squiz",
			"cov": 47,
			"ate": 28,
			"label_x": -2,
			"label_y": -2,
			"text_anchor": "end",
			"link": "http://www.squiz.com.au/",
			"description": "Squiz, an Australian company, markets a PHP offering called <a href='http://www.squizsuite.net/'>Squiz Suite</a>, which consists of WCM, search (via the acquisition of Funnelback) and analytics (built on Google Analytics). Its core WCM product, <a href='http://matrix.squizsuite.net/'>Squiz Matrix</a>, is now up to release 4.8.",
			"flag": "au",
			"language": "php",
			"languageLong": "PHP",
			"logo": "squiz.png",
			"product": "Squiz Suite",
			"strengths": [
				"Business model is based on high-value and maintenance-oriented services",
				"Leader among open-source software communities in terms of marketing and vertical positioning",
				"Successful in key industries, mainly government and higher education, and made progress in others, such as financial services and gaming",
				"Context-aware capabilities, such as the search technology, have enabled it to provide higher value",
				"Promotes a ‘touchscreen-friendly format’ for internal editors"
			],
			"cautions": [
				"Lacks presence in North America",
				"Loyalties are switching from traditional Java-based offerings to .NET offerings",
				"Growth problems",
				"Seen as a partnerless vendor, caught between open-source and proprietary software",
				"Lacks good partner ecosystem",
				"Must consider scalability and sustainability of its business model",
				"Must showcase interoperability"
			]
		},
		{
			"company": "Dynamicweb",
			"cov": 20,
			"ate": 18,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start",
			"link": "http://www.dynamicweb-cms.com/",
			"flag": "dk",
			"language": "net",
			"languageLong": ".NET",
			"product": "Dynamicweb CMS",
			"logo": "dynamicwebcms.png",
			"description": "Dynamicweb markets products that focus on WCM and e-commerce. Although it has traditionally focused on small or midsize businesses (SMBs, see Note 2), it has steadily increased the interoperability of its offering in order to be considered by larger organizations that require more complex solutions. Its flagship product, now in its eighth major release, includes an <a href='http://www.dynamicweb-cms.com/products/online-marketing.aspx'>Online Marketing Center</a>.",
			"strengths": [
				"Good combination of capabilities",
				".NET environment popularity is driven by Microsoft SharePoint",
				"Ability to interoperate with other Microsoft products",
				"Well positioned for customers in vertical markets",
				"Benefits from the trend in e-commerce for businesses to extend their solutions to include WCM modules",
				"Competitive pricing"
			],
			"cautions": [
				"Capabilities not sufficient for organizations with high ambitions for their digital marketing strategy",
				"Customers need to assess whether lower price compensates lack of capabilities",
				"Is in the early stages of establishing an ecosystem required to raise brand recognition",
				"Customers should assess partners and consulting resources available",
				"Needs to invest in its overall marketing strategy"
			]
		},
		{
			"company": "Acquia",
			"cov": 52,
			"ate": 34,
			"label_x": +2,
			"label_y": -2,
			"text_anchor": "start",
			"link": "http://www.acquia.com/",
			"description": "Acquia is a venture-funded company that was founded in 2008. The youngest vendor featured in this Magic Quadrant, has emerged as a prominent <a href='http://drupal.org/'>Drupal</a> business, selling enterprise support and cloud-hosting offerings. Acquia also operates <a href='http://www.drupalgardens.com/'>Drupal Gardens</a>, a software-as-a-service (SaaS) version of the open-source content management system Drupal.",
			"flag": "us",
			"language": "php",
			"languageLong": "PHP",
			"logo": "acquia.jpg",
			"product": "Drupal",
			"strengths" : [
				"Provides well-received services for Drupal",
				"Understands enterprise requirements and ensures relations with the broader Drupal community",
				"Combination of Acquia Commons, social software offering, with a WCM helps enterprises with their broader online channel strategy",
				"Can claim successes regarding Social Media Strategies"
			],
			"cautions" : [
				"Lags behind in terms of deep marketing-oriented capabilities",
				"Needs to develop a substantially advanced vision for OSS WCM",
				"Drupal community doesn’t ‘raise the bar’ for both itself and the aspirations of its target audiences",
				"Needs to invest in the partner ecosystem around Drupal",
				"Partners lack ability to provide expertise in relation to interoperability with adjacent technologies"
			]
		},
		{
			"company": "GX Software",
			"cov": 55,
			"ate": 39,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start",
			"link": "http://www.gxsoftware.com/",
			"flag": "nl",
			"language": "java",
			"languageLong": "Java",
			"product": "WebManager",
			"logo": "gxsoftware.gif",
			"description": "Based in Nijmegen, the Netherlands, GX Software offers two Java-based products relevant to OCO: <a href='http://www.gxsoftware.com/en/products/web-content-management.htm'>WebManager</a>, a WCM offering, and <a href='http://www.gxsoftware.com/en/products/customer-driven-online-engagement.htm'>BlueConic</a>, a product designed to help increase engagement across multiple online channels. The current version of WebManager is 9.18.",
			"strengths": [
				"Compelling value proposition for cross-channel strategy with real-time dynamic profiling and delivery",
				"Ensures greater communications continuity and optimization across channels, both online and offline",
				"Opportunities on the fringes of customer communication management",
				"Continues to grow at a promising rate"
			],
			"cautions": [
				"Needs to increase marketing investment in North America",
				"Needs to develop a broader supporting ecosystem",
				"Needs to improve interoperability with adjacent technologies",
				"Has to improve usability and user experience"
			]
		},
		{
			"company": "CoreMedia",
			"cov": 60,
			"ate": 43,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start",
			"link": "http://www.coremedia.com/",
			"description": "CoreMedia was founded in 1996 and is based in Hamburg, Germany. Its flagship <a href='http://www.coremedia.com/web-content-management/what-we-offer/coremedia-6/content-management/-/26142/26142/-/_tvnvp9z/-/index.html'>content management system (CMS)</a> is in its sixth major release. CoreMedia, which was a Niche Player in 2009, has become a provider of scalable, robust solutions in multiple regions with an impressive customer base and a high retention rate. Version 7 of its product is scheduled to ship at the end of October 2012.",
			"flag": "de",
			"language": "java",
			"languageLong": "Java",
			"product": "CoreMedia CMS",
			"logo": "coremedia.png",
			"strengths": [
				"High usability and interface appeals to both business and IT professionals",
				"Delivery module is well architected and allows interoperability with adjacent technologies",
				"Dynamic experience that can be optimized in real time for different audiences",
				"High-level cooperation agreements with companies such as SAP, IBM and T-Systems",
				"Elastic Social product as the next evolution of its social software capabilities"
			],
			"cautions": [
				"Lacks presence and brand recognition outside Europe",
				"Needs to invest in its overall marketing strategy and expand its ecosystem",
				"Needs to paint a broader solution picture for prospective customers and existing clients",
				"Needs to be more effective in emphasizing different use cases",
				"Needs to place a greater marketing emphasis on interoperability with .NET and SharePoint"
			]
		},
		{
			"company": "EPiServer",
			"cov": 58,
			"ate": 46,
			"label_x": +2,
			"label_y": -1,
			"text_anchor": "start",
			"link": "http://www.episerver.com/",
			"description": "EPiServer, which is headquartered in Stockholm, Sweden, has recently increased its U.S. staff to 30 people via an acquisition. Its flagship <a href='http://www.episerver.com/Products/EPiServer-CMS/'>CMS</a> offering is based on .NET, has been on the market for 13 years, and the latest available version is CMS 6 R2. EPiServer continues to add marketing and sales functions to its WCM product that is used by its related social software and e-commerce products. EPiServer also offers a degree of contextual content delivery across its core products.",
			"flag": "se",
			"language": "net",
			"languageLong": ".NET",
			"product": "EPiServer CMS",
			"logo": "episerver.jpg",
			"strengths": [
				"Modular and well-architected set of capabilities, ease of use and rich functions",
				"Graphical user interface",
				"Enterprise-class vendor with clear and highly competitive prices",
				"Expands into U.K., Western Europe and North America"
			],
			"cautions": [
				"Needs to close the gap with other vendors in terms of marketing-related capabilities",
				"Clients are confused about the completeness of the modules in its ‘suite’ approach",
				"Does not exploit its potential in the SharePoint ecosystem",
				"Needs to adjust its high-level messaging",
				"In North America still viewed as ‘remote’"
			]
		},
		{
			"company": "Ektron",
			"cov": 62,
			"ate": 52,
			"label_x": +2,
			"label_y": 0,
			"text_anchor": "start",
			"link": "http://www.ektron.com/",
			"description": "Ektron has its headquarters in Nashua, New Hampshire. The latest version of its WCM platform, <a href='http://www.ektron.com/Products/Web-CMS/Web-Content-Management/'>Ektron 8.6</a>, released in July 2012, focuses on enhanced usability, enterprise scalability and interoperability through the company's <a href='http://www.ektron.com/Products/Web-CMS/Digital-Experience-Hub/'>Digital Experience Hub</a>. Ektron's platform is based on .NET. The company also provides products for marketing optimization, analytics, e-commerce and social media.",
			"flag": "us",
			"language": "net",
			"languageLong": ".NET",
			"product": "Ektron CMS",
			"logo": "ektron.png",
			"strengths": [
				"Has focused on SME, but is now also attracting business from large enterprises",
				"Strong partner ecosystem, including Omniture, Webtrends, Google, Baynote, Marketo and salesforce.com",
				"Product family resonates with the developing demands of the WCM market",
				"Good relationship with Microsoft, for the extension of SharePoint capabilities and use of Fast Search technology"
			],
			"cautions": [
				"Deteriorating support and deployment assistance for SMEs",
				"Implementation of key capabilities has been difficult from both a technological and an operational perspective",
				"Needs to invest to achieve scale worldwide, but particularly in EMEA"
			]
		},
		{
			"company": "OpenText",
			"cov": 59,
			"ate": 55,
			"label_x": -2,
			"label_y": -1,
			"text_anchor": "end",
			"link": "http://www.opentext.com",
			"description": "OpenText, which is headquartered in Waterloo, Canada, has two primary WCM offerings: <a href='http://www.opentext.de/2/global/products/products-opentext-web-site-management.htm'>Web Site Management (WSM)</a> and <a href='http://www.opentext.com/2/global/products/products-web-content-management/products-opentext-web-experience-management.htm'>Web Experience Management (WEM)</a>. These are based on its acquisitions of Hummingbird (which had earlier acquired RedDot Solutions) and Vignette, respectively.",
			"flag": "ca",
			"language": "net",
			"languageLong": ".NET",
			"logo": "opentext.jpg",
			"product": "Web Site Management",
			"strengths": [
				"WCM offerings are well integrated into its ECM suite",
				"Extensive partner ecosystem gives it strong global capabilities",
				"Strong relationships with SAP and Microsoft",
				"Understands its clients’ need for WCM to be an enabler of customer experience management"
			],
			"cautions": [
				"Confusion and suffering market share due to dual-product strategy with WSM and WEM",
				"Must continue to address marketing roles",
				"Needs to emphasize interoperability with analytics, CRM, sales force automation and e-commerce",
				"Easy to use but not as intuitive as the products of competitors",
				"Needs to focus on future releases of WEM to maintain overall strong position"
			]
		},
		{
			"company": "HP",
			"cov": 63,
			"ate": 60,
			"label_x": +2,
			"label_y": -2,
			"text_anchor": "start",
			"link": "http://www.hp.com/",
			"language": "java",
			"languageLong": "Java",
			"product": "Autonomy TeamSite",
			"logo": "hp.jpg",
			"description": "On 3 October 2011, HP announced that it had completed its acquisition of <a href='http://www.autonomy.com/'>Autonomy</a>, a company that entered the WCM market in March 2009 with the acquisition of Interwoven. Since then, <a href='http://www.autonomy.com/'>Autonomy</a> has enhanced its technology and provided additional capabilities via integration with its search and analytics platform. A strong early focus on specific business scenarios (such as interactive marketing) and the provision of enterprise-class technologies to improve usability have earned <a href='http://www.autonomy.com/'>Autonomy</a> a strong position in this market.",
			"flag": "us",
			"strengths": [
				"Product capabilities remain on the cutting edge with a foundation in the IDOL",
				"DAM and multivariate testing make its capabilities as complete as those of any other WCM vendor",
				"High-end client base that includes well-known brands",
				"High degree of customer loyalty",
				"Benefits from the size and global reach of HP"
			],
			"cautions": [
				"Needs to improve greatly the extent and clarity of its overall vision and strategy",
				"Autonomy is still perceived as an entity separate from the broader HP vision",
				"Synergies are not pronounced or effectively articulated to the market",
				"High cost and complexity",
				"Runs the risk of relying too much on cross-selling"
			]
		},
		{
			"company": "Oracle",
			"cov": 63,
			"ate": 70,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"link": "http://www.oracle.com/",
			"language": "java",
			"languageLong": "Java",
			"logo": "oracle.jpg",
			"product": "Oracle WebCenter Sites",
			"description": "In August 2011, Oracle acquired FatWire Software, which appeared as a Leader in 2010's Magic Quadrant. Since then, Oracle has rebranded its WCM offering as <a href='http://www.oracle.com/us/products/middleware/webcenter/sites/overview/index.html'>Oracle WebCenter Sites</a>, which is its strategic solution for WCM and part of its broader Oracle WebCenter strategy. Oracle's previous WCM solution, Site Studio, is part of <a href='http://www.oracle.com/us/products/middleware/webcenter/content/overview/index.html'>Oracle WebCenter Content</a>, the company's ECM suite. Oracle recommends Site Studio for publishing from ECM to custom Web applications with modest requirements. For marketing and branding websites, Oracle sells <a href='http://www.oracle.com/us/products/middleware/webcenter/sites/overview/index.html'>Oracle WebCenter Sites</a>.",
			"flag": "us",
			"strengths": [
				"OCO capabilities, Oracle Real-Time Decisions, Siebel, Endeca and ATG Web Commerce, cloud-based social marketing",
				"ECM capabilities in WebCenter can complement its WCM-focused assets",
				"Document management, web publishing, DAM, search, records and retention management, archiving, and backup and recovery",
				"Oracle RTD can exploit a broad range of user attributes to provide personalization and context awareness"
			],
			"cautions": [
				"Overlapping products",
				"Has to demonstrate compelling integrations with its business application portfolio",
				"Brand is not strong in the workplace-related areas of collaboration and social media"
			]
		},
		{
			"company": "Adobe",
			"cov": 67,
			"ate": 64,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "Adobe, which is based in San Jose, California, acquired Day Software, a Swiss company, in October 2010 and has since achieved a high degree of traction and a strong position of leadership. This is particularly the case among organizations wishing to develop or extend a digital marketing strategy. Adobe's core WCM offering, <a href='http://www.adobe.com/products/cq.html'>CQ 5.5</a>, sits on top of an open, standards-based composite content application platform. A core component of this platform is an integrated Java Content Repository. Adobe's primary offerings in this market are <a href='http://www.adobe.com/solutions/digital-marketing/web-experience-management.html'>Web Experience Management (WEM)</a> Basic and WEM Standard, which both integrate with the company's digital marketing services, such as <a href='http://www.adobe.com/products/sitecatalyst.html'>SiteCatalyst</a>, <a href='http://www.adobe.com/products/testandtarget/testandtarget.html?rdrct=true&s_tnt=51841:1:0'>Test&Target</a>, <a href='http://www.adobe.com/products/scene7.html'>Scene7</a>, <a href='http://www.adobe.com/products/searchandpromote.html'>Search&Promote</a> and <a href='http://www.adobe.com/products/insight.html'>Insight</a>.",
			"link": "http://www.adobe.com/",
			"flag": "us",
			"language": "java",
			"languageLong": "Java",
			"logo": "adobe.jpg",
			"product": "Adobe CQ",
			"strengths": [
				"Easy to use and fast to deploy",
				"User interface a competitive edge in terms of intuitiveness",
				"Analytical capabilities enable persona-based assessments of the potential of different types of experience",
				"Has an advantage in its efforts to create a ‘customer experience platform’",
				"Mobile strategy and offerings have an excellent reputation"
			],
			"cautions": [
				"Lack of cohesion in sales, execution and implementation support",
				"Needs to adapt to meet the needs of recently acquired or prospective customers",
				"Focuses almost solely on digital marketing scenarios",
				"Should be more of a thought leader and broader in its reach",
				"Confusion about how to build broader, more effective strategies that incorporate more of Adobe’s capabilities",
				"Needs to compete against the interoperability capabilities of best-of-breed WCM vendors"
			]
		},
		{
			"company": "SDL",
			"cov": 73,
			"ate": 64,
			"label_x": +2,
			"label_y": +1,
			"text_anchor": "start",
			"link": "http://www.sdl.com/",
			"language": "java",
			"languageLong": "Java",
			"logo": "sdl.jpg",
			"product": "SDL Tridion",
			"description": "SDL, which is headquartered in Maidenhead, U.K., views its WCM product, <a href='http://www.sdl.com/products/tridion/'>SDL Tridion</a>, as part of its broader strategy for 'Global Information Management' and increasingly focuses on marketing solutions and enhancing the customer experience. The introduction of modules that optimize the online experience has raised the market's expectations of SDL in terms of quality, innovation and value.",
			"flag": "gb",
			"strengths": [
				"WCM capabilities are regarded highly",
				"Appeals to both marketing and IT organizations",
				"Is gaining traction in the North American market",
				"Maintains a strong lead by integrating its globalization capabilities into its core WCM"
			],
			"cautions": [
				"Not easy to implement as its capabilities are complex",
				"Must improve partner ecosystem and communicate directly with clients",
				"Must be clearer about its strategic direction",
				"Needs to articulate its strength and capabilities in online and cross-channel optimization",
				".NET capabilities are not exploited effectively"
			]
		},
		{
			"company": "Sitecore",
			"cov": 78,
			"ate": 63,
			"label_x": +2,
			"label_y": -2,
			"text_anchor": "start",
			"link": "http://www.sitecore.net/",
			"language": "net",
			"languageLong": ".NET",
			"logo": "sitecore.gif",
			"product": "Sitecore Web Content Management System",
			"description": "Sitecore appeals to organizations seeking fairly modest WCM solutions and to those currently engaged in more ambitious OCO endeavors, such as digital marketers. The company's flagship <a href='http://www.sitecore.net/Products/Web-Content-Management.aspx'>Sitecore Web Content Management System v.6.5</a> and <a href='http://www.sitecore.net/Products/Digital-Marketing-System.aspx'>Sitecore Digital Marketing System v.2.0</a> are based on .NET. An <a href='http://www.sitecore.net/Products/Digital-Marketing-System/Email-Marketing.aspx'>Email Campaign Manager</a> enhances its marketing and sales execution capabilities, while facilities for engagement analytics give marketers more autonomy in optimizing customer engagement across channels. Sitecore also provides e-commerce capabilities, particularly for business-to-business customers, through an OEM partnership with <a href='http://www.insitesoft.com/'>Insite Software</a>.",
			"flag": "dk",
			"strengths": [
				"Focus on customer engagement",
				"Displaying growth in the WCM market",
				"Usability remains strong in relation to challenging issues",
				"Enables good continuation between online offline experiences",
				"Brings good visibility to user interactions and campaign activity"
			],
			"cautions": [
				"Needs to execute on its vision faster ",
				"Long periods between its more visionary ideas could cost it market share",
				"Investment in research and development needs to increase",
				"Partnerships with some system integrators have not been monitored well",
				".NET strength makes it less attractive to users looking for tools with a strong Java or LAMP stack focus"
			]
		}
	]
	
	// creating the circles
	quadrant_group.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", function(d) {
			return "circle item " + d.flag + " " + d.language + " " + d.company.toLowerCase().replace(/\s/g, "")
		})
		.attr("cx", function(d) {
			return xScale(d.cov);
		})
		.attr("cy", function(d) {
			return yScale(d.ate);
		})
		.attr("r", 7)
		.attr("opacity", 1)
		.on("mouseover", function() {
			d3.select(this).classed("circle-hover", true)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-hover", true)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".wcm-label-selected").classed("wcm-label-selected", false)
			d3.select(self).classed("circle-selected", true)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})
		.on("mouseout", function() {
			d3.select(this).classed("circle-hover", false)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-hover", false)
		})
	
	// creating the labels for the circles
	quadrant_group.selectAll(".wcm-label")
		.data(data)
		.enter()
		.append("text")
		.attr("opacity", 1)
		.attr("class", function(d) {
			return "wcm-label item " + d.flag + " " + d.language + " " + d.company.toLowerCase().replace(/\s/g, "")
		})
		.attr("x", function(d) {
			return xScale(d.cov + d.label_x);
		})
		.attr("y", function(d) {
			return yScale(d.ate + d.label_y);
		})
		.text(function(d) {
			return d.company
		})
		.attr("text-anchor", function(d) {
			return d.text_anchor
		})
		.on("mouseover", function() {
			d3.select(this).classed("wcm-label-hover", true)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-hover", true)
		})
		.on("mouseout", function() {
			d3.select(this).classed("wcm-label-hover", false)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-hover", false)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".wcm-label-selected").classed("wcm-label-selected", false)
			d3.select(self).classed("wcm-label-selected", true)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})
		
	// click on the country dropdown
	$(".country-select").on("click", function(evt) {
		$(".country-top").html($(this).html())
		$(".language-top").html(' \
			<i class="icon-font"></i> \
			<span></span>  \
			<span>Select Language</span> \
		');
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on country reset
	$(".country-reset").on("click", function(evt) {
		$(".country-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})
	
	// click on language dropdown
	$(".language-select").on("click", function(evt) {
		$(".country-top").html(' \
			<i class="icon-globe"></i> \
			<span></span>  \
			<span>Select Country</span> \
		');
		$(".language-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on language reset
	$(".language-reset").on("click", function(evt) {
		$(".language-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})
	
	$(".init-hidden").hide();
	
});