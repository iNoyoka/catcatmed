2018/09/28  09:45 CATCATMED LOG FILE
author: iNoyoka

----------------------------------
New:
1. Database link every 5 second to avoid lost connect of mysql.


----------------------------------
Update:
1. Milkycat add to the algorithm.
2. Multiple select of questionnaire update (if select 'unsure', then change req.session.xxx = ['unsure'])
3. Reset the value of req.session.xxx while client ask to visit '/questionnaire/xxx', which can avoid incorrect data record.
4. Comment out TEST CODE of last time.