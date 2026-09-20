# ✅ Search Testing Checklist - Quick Guide

Copy each URL below, paste in browser, and verify results!

---

## ✅ **Tests That Should FIND Items**

### 1. Search: "biryani"
**URL:** http://localhost:3000/menu?q=biryani  
**Expected:** 12+ items displayed  
**Should show:** Chicken Donne Biryani, Mutton Donne Biryani, Veg Dum Biryani, etc.  
**Status:** [ ] Pass [ ] Fail

---

### 2. Search: "chicken"
**URL:** http://localhost:3000/menu?q=chicken  
**Expected:** 15+ items displayed  
**Should show:** Chicken Chops, Chicken Majestic, all chicken biryanis  
**Status:** [ ] Pass [ ] Fail

---

### 3. Search: "veg"
**URL:** http://localhost:3000/menu?q=veg  
**Expected:** 5-8 items displayed  
**Should show:** Veg Dum Biryani, Gobi Manchurian, Cabbage Manchurian  
**Status:** [ ] Pass [ ] Fail

---

### 4. Search: "egg"
**URL:** http://localhost:3000/menu?q=egg  
**Expected:** 3+ items displayed  
**Should show:** Bengaluru Egg Chilli, Bengaluru Egg Rice  
**Status:** [ ] Pass [ ] Fail

---

### 5. Search: "mutton"
**URL:** http://localhost:3000/menu?q=mutton  
**Expected:** 5+ items displayed  
**Should show:** Mutton Donne Biryani, Nizam Mutton, Amaravathi Mutton  
**Status:** [ ] Pass [ ] Fail

---

### 6. Search: "paneer"
**URL:** http://localhost:3000/menu?q=paneer  
**Expected:** 3+ items displayed  
**Should show:** Paneer 65 Dum Biryani, Nizam Paneer, Amaravathi Paneer  
**Status:** [ ] Pass [ ] Fail

---

### 7. Search: "manchurian"
**URL:** http://localhost:3000/menu?q=manchurian  
**Expected:** 2 items displayed  
**Should show:** Gobi Manchurian, Cabbage Manchurian  
**Status:** [ ] Pass [ ] Fail

---

### 8. Search: "donne"
**URL:** http://localhost:3000/menu?q=donne  
**Expected:** 3-4 items displayed  
**Should show:** Chicken Donne Biryani, Mutton Donne Biryani, Avrekai Donne Biryani  
**Status:** [ ] Pass [ ] Fail

---

### 9. Search: "CHICKEN" (uppercase - case insensitive test)
**URL:** http://localhost:3000/menu?q=CHICKEN  
**Expected:** 15+ items (same as "chicken")  
**Should show:** All chicken items  
**Status:** [ ] Pass [ ] Fail

---

### 10. Search: "chick" (partial match test)
**URL:** http://localhost:3000/menu?q=chick  
**Expected:** 15+ items (matches "chicken")  
**Should show:** All chicken items  
**Status:** [ ] Pass [ ] Fail

---

## ❌ **Tests That Should Show "NOT FOUND"**

### 1. Search: "pizza"
**URL:** http://localhost:3000/menu?q=pizza  
**Expected:** 0 items  
**Should show:**  
```
"pizza" not found

We couldn't find any dishes matching your search. 
Try different keywords or browse our complete menu.

[See the full menu] [Contact us]
```
**Status:** [ ] Pass [ ] Fail

---

### 2. Search: "burger"
**URL:** http://localhost:3000/menu?q=burger  
**Expected:** 0 items  
**Should show:** `"burger" not found`  
**Status:** [ ] Pass [ ] Fail

---

### 3. Search: "pasta"
**URL:** http://localhost:3000/menu?q=pasta  
**Expected:** 0 items  
**Should show:** `"pasta" not found`  
**Status:** [ ] Pass [ ] Fail

---

### 4. Search: "sushi"
**URL:** http://localhost:3000/menu?q=sushi  
**Expected:** 0 items  
**Should show:** `"sushi" not found`  
**Status:** [ ] Pass [ ] Fail

---

### 5. Search: "tacos"
**URL:** http://localhost:3000/menu?q=tacos  
**Expected:** 0 items  
**Should show:** `"tacos" not found`  
**Status:** [ ] Pass [ ] Fail

---

### 6. Search: "xyz123" (gibberish)
**URL:** http://localhost:3000/menu?q=xyz123  
**Expected:** 0 items  
**Should show:** `"xyz123" not found`  
**Status:** [ ] Pass [ ] Fail

---

## 🎯 **Additional Manual Tests**

### Test: Empty Search
1. Go to http://localhost:3000/menu
2. Don't type anything in search
3. **Expected:** All 60+ items displayed
4. **Status:** [ ] Pass [ ] Fail

---

### Test: Top Nav Search Bar
1. Go to http://localhost:3000 (homepage)
2. Type "biryani" in top nav search bar
3. Press Enter
4. **Expected:** Redirects to `/menu?q=biryani` with results
5. **Status:** [ ] Pass [ ] Fail

---

### Test: Category Filters
1. Go to http://localhost:3000/menu
2. Click "Biryani" category button
3. **Expected:** Shows only biryani items
4. **Status:** [ ] Pass [ ] Fail

---

### Test: Combined Search + Filter
1. Go to http://localhost:3000/menu
2. Click "Biryani" category
3. Then search "chicken" in top nav
4. **Expected:** Shows only chicken biryani items
5. **Status:** [ ] Pass [ ] Fail

---

### Test: Clear Search Button
1. Search for "pizza" (not found)
2. Click "See the full menu" button
3. **Expected:** Shows all 60+ items, search cleared
4. **Status:** [ ] Pass [ ] Fail

---

### Test: Mobile Search (if on mobile device)
1. Open http://localhost:3000 on mobile
2. Find compact search in top nav
3. Type "chicken" and search
4. **Expected:** Results display properly on mobile
5. **Status:** [ ] Pass [ ] Fail

---

## 📊 **Testing Summary**

**Total Tests:** 21  
**Passed:** ___  
**Failed:** ___  
**Pass Rate:** ___%

---

## 🐛 **Issues Found**

List any issues discovered during testing:

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## ✅ **Sign-off**

**Tested by:** ________________  
**Date:** 2026-09-20  
**Browser:** ________________  
**Device:** ________________  

**Overall Status:** [ ] All Tests Pass [ ] Issues Found

---

## 🎉 **Expected Final Result**

After all tests pass, you should have verified:

✅ Search finds correct items  
✅ Search is case-insensitive  
✅ Partial matches work  
✅ "Not found" message shows item name  
✅ Helper text is clear and helpful  
✅ Category filters work  
✅ Combined search + filters work  
✅ Empty search shows all items  
✅ Top nav search works from any page  
✅ Mobile search works  

**Ready for production!** 🚀
