$urls = @{
  "mutton-kacchi.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kacchi_biryani.jpg/800px-Kacchi_biryani.jpg"
  "beef-kacchi.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mutton_Kacchi_Biryani_of_Dhaka.jpg/800px-Mutton_Kacchi_Biryani_of_Dhaka.jpg"
  "jali-kabab.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jali_Kabab_%281%29.jpg/800px-Jali_Kabab_%281%29.jpg"
  "tikka-kabab.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Chicken_Tikka_Kebab_01.jpg/800px-Chicken_Tikka_Kebab_01.jpg"
  "beef-tehari.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beef_Tehari.jpg/800px-Beef_Tehari.jpg"
  "morog-polao.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Morog_polao_1.jpg/800px-Morog_polao_1.jpg"
  "bhuna-khichuri.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bhuna_Khichuri_%281%29.jpg/800px-Bhuna_Khichuri_%281%29.jpg"
  "borhani.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Borhani_Drink.jpg/800px-Borhani_Drink.jpg"
  "phirni.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Firni_-_Bangladeshi_Dessert.jpg/800px-Firni_-_Bangladeshi_Dessert.jpg"
  "mahalabia.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Muhallebi_%28meaning%29.jpg/800px-Muhallebi_%28meaning%29.jpg"
  "water-coke.jpg" = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Coca-Cola_glass_bottle_with_diet_versions.jpg/800px-Coca-Cola_glass_bottle_with_diet_versions.jpg"
}

foreach ($item in $urls.GetEnumerator()) {
  try {
    $res = Invoke-WebRequest -Uri $item.Value -Method Head 
    Write-Host "$($item.Name) : OK"
  } catch {
    Write-Host "$($item.Name) : FAIL"
  }
}
