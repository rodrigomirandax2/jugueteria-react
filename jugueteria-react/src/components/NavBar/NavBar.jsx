import React, { useState } from 'react';
import { Tabs, Menu, MenuItem, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';

function NavBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tabs className='Tabs'>
        <Avatar className='Avatar' src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDQ8SEA8PEBAPDQ0NDw8PDQ8NDw8NFREWFhUVFRUYHSggGBolGxUVITMhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHx0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EAEEQAAIBAgIHBgMFBQYHAAAAAAABAgMRBCEFEjFBUWFxBhMigZGhMkLBUnKx0eEUI1Ni8BUzc4KSsgc0Q5OiwvH/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwUBAgYEB//EADcRAAIBAgMFBQcCBgMAAAAAAAABAgMRBCExBRJBUWETcZGh8CIygbHB0eEUQhVDUnKSslNiwv/aAAwDAQACEQMRAD8A+1gAwAAAAAAAASAQAAAAAAAAACHJEa5q5JcTO6z0DzrjXG/HmZ3WegQpIkymnoYsAAZMAEkAAAAAAAAAAAAAAAAAAkGSAADABJAAAAAAAAAAABDZ4buaSmkbKNyXM8Tlk3m7K9krvyRJKIXJvUkSSKTEafivhhfnOSj7fqV9XtFUfwyjHpC/43KvSbTxFVrY6tRrprOxrHH18dinKUXUdk+GWnXXzZ0VPBUUk7fX5lv/AG5V/i1PJJfUR05V/iy84p/QqAeb9RW/5Jf5S+5N+mpf0rwR0NDT9XjCp5ar9rG9Q09H54OPNO69MjkD1CtJb78nmeintLFU/wB+9/dn56+ZBUwFKXD6H0HDYuFReCWtxS3dVtRsJnB0aksnaUWtjbt6MucFpuUbKr4l9u3iXVb/AOtpc4TbsJPdrLdfPVfdfG/VlXW2dKPuZ+vBnSAxUK8ZxTi009jWwynQRkpK6K1pp2YABkwAAAAAAAAAAAACRcDIAgAAAAAAAAEkAABuwZilLM0nKyNoq4bJIB5yUGrpGu4UpavxyVo8m9/kbRp4qGtm/LkRV5SVN7uvy6m9NLeV9Dj54SS3e6ME6Elu+p0GLhYrpbTjK1LsnYv6ddyzKxoGfF4mEJUozt+9qqlG7tnZ297L/MZI4eKd8+jIb8z0dojDSw7ebyXuzZhBLYvzPUpJK7NSriG9mS92YzZH7UzYnVitrz4LaYZYrll1zMB5kbJIlVOJbYDSE6UtaDvF/FF7JL6PmddgMbGrBSi8tjT2xlwZ85p1tR5/C9vLmW+AxkqU1KOaeUo3ymv63lps/aMsLJRlnB+XVfVfFZngxuCVRXWvDr0fry07kGHCYiNSClF3TV0+XPnuMx2cZKSTWjOdaadmAAZMAAAAAAAAAAAAAAAAAAAAAAkgkAxzZWYHGRq16tnlFLUXFfNLzer7E6axOpSdviqZLp8z9MvM4/8Aapwqa0JOLjkmvfqjn9obR7LEQis0s5dzTSX/AKt3FrhMH2lOXC+nrrp4n0ExVKsY7Xnw3nL0tL4iUfFU2/ZjFP1SMtHEcfN8zT+MUpO0E/jZfJsfoZL3mvh6R0XeXMNeorFcsZltMNbF3M1MfHdNY4d3POLqHM47tFh6VRwn3qqLPU1M5LjG78S5q5c1alyq07o6hiKE4143jGMpqSynTaV7we5+3EoZ1YTqe1e3TX89xaUYqOqucN2q028RUjKipxVFUu7UklPvVVi7266q8jp6fbLC6ilJVYXSvenBx1t6T1s8zhcHXlT16UZTb7t687ubor4Vq32ZyTfRLJ7Og/4e4CjOVarVvUxNGpGKc5a6jBxvGUb721LPllYssVhqMKK3k7Q0tq787rS/Hr1PfVjGKzjplr+DtsPVVWmpak4qSuo1I6krcWtq88zXrUtV8nsZukTimrMo75nljLdfQ0AJRs2uANj0mi5WlKD+9D7vDyNvR1f5H1j03o0dKxtqSW1Nr6r6kUauyS6k7jvRvzJd3fjY7Ps/jtSpqP4ZvLlP9dnWx1Z89hO6TW9Jo7XRGL72jFvavDLqX+wsXvRdCXDNd3FfB+Xcc3tKha1RdzN0AHRFSAAAAAAAAALEiwFuhkgAAwAAAAAADzN5HoiW41lozMdTlO0eIvVa3U4pebzf4+xzxYaTq6znL7dT2d2V58/xFXtas6nNvw0XlY63C09ymkdRoLDQjTdWpa0clldKyV8t7zsiuq1Lyk7W1m3bhfOxj13a1/Dfi9vHqV+ktLUsNZ1deMZZKerenfg5bE+T2m867qU6dGnG1s3zcnq/X2PNCk9+Um7t+SN7EYnu6cpvZCLl1tuIoYhVKcJxd4zhGpF8YyV1+JyHaHtHTq0o0qSqJyqwlNzjqp01wzzzt6Mwdk+09KlgadKuq2tSuk4w106O2LfDbbokZ/SVnS37O99OnPxPW8NNRT3Xd/I7i5raQoSqUpQjLUc7Rc7azjG+dlvduPvsMOi9KU8TFypKrqJ215Q1Yt8Ivf5G8eRqVOVmrNEWafcaWjdFUMPSdOlTSjL43Lxyqve5t/Ea+B0HToYqVWi3CFSk4VKO1XveMo8LZq38z4WLUGe1n7Wfva9fXkLvNX1BCeduSfkSV9bSuHjPOtBat4Tz+GW2z4M1jFy0RmMXLRHvHzjGULuzqPUXOSi3+CPByHbDTylVpyoSU4Yfuqid2lKoqkW10skvNl9DTWFaT76mrq9nk11PVLDTjCMrPPpp6Vj0qEkkmuBl0mv3fSSf0+po4WWTXmbeMrRnRUoSUoyatJbGr7uJoYZ+Lqmb017DTJqehfaOneFvsv2ef5nTdl69qk4bpK66r9H7HJ6Ll4pLjFP0f6l/oOVsVSfGTXqrfU2wVTssZTa5pf5ZPyZXY+nvQmul/qdmADuzlQASAQAAAAACQADJAABgAAAAAAGHEu0ZPgpP0RmMOLjeE1xp1F/4mlT3XY3h7yOCxXwrr9DWM2KfhX3l+DMB84h7qOwhob9KV4roK1KM4yjOKlGScZRklKMlzRgwk93mjZMPJkEo2bR8u0vh4YPGzjQ13HvFGnSlNzi52V8t6i3vzyXUnQ+Fp19JQhiZTnTn3kqdNytFVYq+pJLcrS2WvlxaO70doOlSqyrTtUxE226kllTv8tNfKs3ntd30POk9A06tWFan+6xFOrCsp/LUcXrWmuaur7c95b/xCNtzO9rb3G9teevHXXgyV1IO6tbLJ+ufMtoQUYqMUoxikoxikkorYktyJAKcgAAABz3aTQ9LENybdKrCNo14ZSSWbUrfEuXoX9Seqr/1cqsbTnOnKMNXXn4E5Pwq+Tbtm1yJqMnGScXbqS01xPnWFqqOtCfdzquOvGUoWjTSeWuo2vd2z3WvnkWnZHRcMQp1K71u6q93+z6sY0lJJPWlFZS27Lbt50WE7N4ajGUZRVac1arVqLxSe16q+RX3Lgs8jHovRDw2IqOEtalVhFWb8cJxfg6qzkr7dnUtq2NjUhKMMnlbrzty+vkeiUlLNGzpWeUVzv5JfqaND4l5/gZMdU1pvgsvzMeHXiXmeWC3YE0VkW+jf7z/ACv8UXuiv+Zo/wCLT/3IotGLxvlF/ii+0TG+Jo/4sX7/AKENLPEU/wC6P+yPFi373d9DtgAfQDjwAAAAAAAACQLgZAgAAAAAAAAAiayJIayMNZGU7M+e4yk0pxe2Kb84vP8AA0aci+03R1cRUyym9dc9bb7nOPwyceD9tx89nS7Oc6f9LaOxw8lOF1xzNpM3KNXWXPeVVKtaWo+sHxXDyNlMjlE2nC5YA1qeJ+16ozxqJ7GiNqx55Ra1PQOWxenVHS1GH/TvPBy4a89Rp9ddRj6nUt225dcjepTcFG/7lcSi42vxVwG7bTFPERWzM1alRy2+m41sZjTb1Jr1dZ8lsPMXZ34ZlJ2rxzpYZqLtOaquL3pQpuV156nqWWj8Wq1CnVWypTjPo2s15O68iZ02oKfB5evPwPRu2S5GyzUxlfVi+OxdT3XrJJlTXqucr+i4I2pU953ZJGPExmbCx2vyMJu0oWSXr1PTN5EyLLRkMpPi0vT/AOnRdmqWtiE/sKc/bV/9imw1PVhFb7Z9d51XZbD2hOp9pqH+nb7v2NtmUu2xkOSz8NPOxTbQq2pzlzy8cvlcvAAducyAAAAAACSAAAAAAAAAAAAAAAAAUXajC3hGovkdn917Pf8A3HHaRo5KS3ZPofSsRSU4SjLNSTT6M4bF4d05yhLc2uUo7vJo5PbeGdOsq0VlLXvX3Wncy+2XiPZ3eMfNHO1o60eazT5nrC4/5Z7dmt+ZkxVBwl/K9j+hp16V81t3riVq3ZKzL9pSV0W10/M5ftFgMTTjKpRqzqUkm505VpKpTXGM7+Jdbvrus8O6kdmzg9hj03im8PKEVrTnaKgna+d83uWWbN6ClTqq1n9voabjTuchUjDuu8l3jnGTqd3eLkrtJTc77NZSzte7Ttxuez2j8RiFGrUq1KdF5wjGtOVWqk98r2jG+WSTy3bRhezUe6m5V069SzllelkmtS221na/DcWPZXXo0p0KkXF0qjcN6dKeas9/i1j3YnERlSap6p8eXS/W2f4Et5531L+KSSS2LLiVumNHVKi1qNaVOol8LlJ0p8pL5XzXnfduSxCNepjYr5kVUN+L3o6mqhI4iEZTnOGJc4Sip05N1I1YqUlq6qTeWb4vJPhc8YDvakpU6DnRhTdpupVktRNvZTi14r3yu+djeho2Vas6tS8Ia8p04bJuT+ad9nTb0zvGHwk6GKjJ+KFSLpTmvWGsuN0lfmXrqx3Wla9tM7X6c+PFkj3nnf5evxmW9CnqRUdact7lObnKT48uiMgPdKlrdCub4s2PeGp3d9y2dSzwFHWnd7I5+e416VNtqMV+iLijSUIpL14vieSrMjqz3VZaszU4OUlFK7k0kuLew7nB0FSpwgtkUlfi9783dlJ2awF/30llmqfN7HL6ep0J0uw8I6dJ1paz06L8691jl9o196apr9vz/ABJBeFaAAAAAAAAAAALdAAAAAAAAAAAAACp07o7vYa0V+8gv9S4f19S2BFXoQr03Tno/XkSUqkqclKPA+d1aakmmvzTKnEYdweeaex8f1O705ohu9Sks9s4LfzS48jm5RTVmrp7jhsRh6mEqdnP4Pmua+q4HUYTFxnHejpxXL15nPVaV+T9jVnBrai8xGAazhmvsvb5cTSlHc11TRmFQsYyjLRlcejblQi+XQxPDPc155EqmjaxhBk/Z5cvU9LDPivcby5gwkJGzHDLe2/YzRglsVjDmuAsa9PD8fQ26VNtpRX6Iz0MHKW3wrntfRFjRoxgrJdXvfU886pFOso5LNnjC4dQXFva/ouRa6J0dKvO2yEbOb5cFzY0Zo2deWXhgn4p29lxZ12Gw8KcFGCsl6t8XxZZbL2ZLESVWqvY/wBvxzfhzKTG43cvGLvJ+X5MlOCikkkkkkktyRIB15QAAAAAAAAAAAAEggkGSAADAAAAAAAAAAAAAKvSWhoVryj4Km928MnzX1XuWgIq1GnWhuVFdP18H1RvTqSpy3ouzOGxeCqUnacWuD2xfQ1KlKMviSZ9DnFSTTSae1NJp+RVYvQNGecV3b5eKPo/oc5idgTTvQldcnk/HR+XVltR2nH+YrPmvV/mcPPR8XsbXXxIwy0fPc4v1R1dfs7Wj8LhPknqv0eXuac9FYhbaM30Wv8AgVc8Ji6eUqcvC/mros6eOjLSafh8nZnPfsNTgvUlaPnxivN/kXv9n1/4VX/tz/ImOjcRuoz84SI+zxD/AJb/AMX9iV4vql4FPDR63yfll7mzSw8I7Iq/F5suKGgcRLalDnOa+l2WGF7ORX95Ny/lgtVer/Q9FPZmMq/saX/bLy18jy1doU1rO/dn8jnqcHJpRTk3sVm2/IvdHdn72lW2fw75v7zWzyLzD4WnSVqcFHjZZvq9rMxd4TYdKm96s998v2r7/HLoVVfaM5ZQW6vP8HmEFFJRSSSsklZJHoAvStAAAAAABJAAAAAAAAFySCRfqCASQAAAAAAAACQCAAAAAAAAAAAAAAAAAAAAAASQAAAAAAAAAAAAAACQCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALEgGbIH//2Q=='/>
        <Link className='Link' to="/">Inicio</Link>
        <div className='Link'>
          <Link className='Link' onClick={handleMenuClick} to="#">Figuras</Link>
          <Menu
            id="figuras-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="/figuras/all">Todas las figuras</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/figuras/guerrero">Guerreros Z</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/figuras/villano">Villanos</Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="/figuras/personaje">Personajes Secundarios</Link>
            </MenuItem>
          </Menu>
        </div>
        <Link className='Link' to="/empresa">Empresa</Link>
        <CartWidget />
      </Tabs>
    </>
  )
}

export default NavBar;