import classNames from 'classnames'
import './index.scss'

const Menu = () => {
  const foodsList = [
    {
      "tag": "318569657",
      "name": "一人套餐",
      "foods": [
        {
          "id": 8078956697,
          "name": "烤羊肉串(10串)",
          "like_ratio_desc": "好評度100%",
          "month_saled": 40,
          "unit": "10串",
          "food_tag_list": ["點評網友推薦"],
          "price": 90,
          "picture": "https://zqran.gitee.io/images/waimai/8078956697.jpg",
          "description": "",
          "tag": "318569657"
        },
        {
          "id": 7384994864,
          "name": "臘味煲仔飯",
          "like_ratio_desc": "好評度81%",
          "month_saled": 100,
          "unit": "1人份",
          "food_tag_list": [],
          "price": 39,
          "picture": "https://zqran.gitee.io/images/waimai/7384994864.jpg",
          "description": "",
          "tag": "318569657"
        },
        {
          "id": 2305772036,
          "name": "雞腿胡蘿蔔燜飯",
          "like_ratio_desc": "好評度91%",
          "month_saled": 300,
          "unit": "1人份",
          "food_tag_list": [],
          "price": 34.32,
          "picture": "https://zqran.gitee.io/images/waimai/2305772036.jpg",
          "description": "主料：米、雞腿、菜心、胡蘿蔔",
          "tag": "318569657"
        },
        {
          "id": 2233861812,
          "name": "小份酸湯莜麵魚魚+肉夾餉套餐",
          "like_ratio_desc": "好評度73%",
          "month_saled": 600,
          "unit": "1人份",
          "food_tag_list": ["「口味好,包裝很好～按讚」"],
          "price": 34.32,
          "picture": "https://zqran.gitee.io/images/waimai/2233861812.jpg",
          "description": "酸湯莜麵魚魚，主料：酸湯、莜麵 肉夾饃，主料：白皮餅、豬肉",
          "tag": "318569657"
        }
      ]
    }
  ]
  const menus = foodsList.map(item => ({ tag: item.tag, name: item.name }))
  return (
    <nav className="list-menu">
      {/* 新增active類別名稱會變成啟動狀態 */}
      {menus.map((item, index) => {
        return (
          <div
            key={item.tag}
            className={classNames(
              'list-menu-item',
              'active'
            )}
          >
            {item.name}
          </div>
        )
      })}
    </nav>
  )
}

export default Menu